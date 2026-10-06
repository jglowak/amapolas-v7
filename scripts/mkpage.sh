#!/usr/bin/env bash
# Crea los wrappers ES y EN de una página.
# Uso: scripts/mkpage.sh <ruta-sin-barra> <Componente> <carpeta-componente> <modulo-i18n> [modulo-padre ruta-padre]
set -e
route=$1; comp=$2; cdir=$3; mod=$4; pmod=$5; ppath=$6
for L in es en; do
  if [ $L = es ]; then base=src/pages; else base=src/pages/en; fi
  file=$base/$route.astro; mkdir -p "$(dirname "$file")"
  depth=$(( $(echo "$file" | tr -cd '/' | wc -c) - 1 )); R=$(printf '../%.0s' $(seq 1 $depth)); R=${R%/}
  crumbs=""
  if [ -n "$pmod" ]; then crumbs="{ name: ${pmod}.$L.meta.crumb, path: '$ppath' }, "; pimport="import { $pmod } from '$R/i18n/$pmod';"; else pimport=""; fi
  cat > "$file" <<EOT
---
import Base from '$R/layouts/Base.astro';
import $comp from '$R/components/$cdir/$comp.astro';
import { $mod } from '$R/i18n/$mod';
$pimport
const { title, description, crumb } = $mod.$L.meta;
---
<Base lang="$L" title={title} description={description} breadcrumbs={[${crumbs}{ name: crumb, path: '/$route' }]}>
  <$comp lang="$L" />
</Base>
EOT
done
