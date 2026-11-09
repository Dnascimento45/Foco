# Servidor estatico local para o Dojo de Estudos.
# Uso:  powershell -ExecutionPolicy Bypass -File servir.ps1        (porta 8765)
# O index.html e um fragmento (sem <!doctype>), entao o servidor o embrulha numa pagina completa,
# como faz a plataforma de artefatos.
param([string]$Raiz = $PSScriptRoot, [int]$Porta = 8765)
$Raiz = (Resolve-Path $Raiz).Path
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Porta/")
$l.Start()
Write-Host "Servindo $Raiz em http://localhost:$Porta/  (Ctrl+C para parar)"
$tipos = @{ '.html'='text/html; charset=utf-8'; '.js'='application/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.png'='image/png'; '.svg'='image/svg+xml'; '.json'='application/json; charset=utf-8'; '.md'='text/plain; charset=utf-8' }
while ($l.IsListening) {
  $c = $l.GetContext()
  try {
    $p = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath.TrimStart('/'))
    if ($p -eq '') { $p = 'index.html' }
    $f = [IO.Path]::GetFullPath((Join-Path $Raiz $p))
    if ($f.StartsWith($Raiz) -and (Test-Path $f -PathType Leaf)) {
      $b = [IO.File]::ReadAllBytes($f)
      $ext = [IO.Path]::GetExtension($f).ToLower()
      $c.Response.ContentType = if ($tipos.ContainsKey($ext)) { $tipos[$ext] } else { 'application/octet-stream' }
      if ($ext -eq '.html' -and $p -eq 'index.html') {
        $txt = '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>' + [Text.Encoding]::UTF8.GetString($b) + '</body></html>'
        $b = [Text.Encoding]::UTF8.GetBytes($txt)
      }
      $c.Response.OutputStream.Write($b, 0, $b.Length)
    } else { $c.Response.StatusCode = 404 }
  } catch { $c.Response.StatusCode = 500 }
  $c.Response.Close()
}
