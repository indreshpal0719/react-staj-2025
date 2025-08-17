# Oluşturulacak component isimleri
$components = @(
    "Header",
    "TaskName",
    "DueDate",
    "StartTime",
    "RemindMe",
    "Categories",
    "CreateTask",
    "BottomSheet"
)

# Hedef klasör
$targetDir = "src/components"

# Klasörü oluştur (yoksa)
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force
}

# Her component için dosya oluştur
foreach ($component in $components) {
    $filePath = Join-Path $targetDir "$component.tsx"

    @"
import React from 'react';

const $component = () => {
  return (
    <div>
      {/* $component component */}
    </div>
  );
};

export default $component;
"@ | Set-Content -Path $filePath -Encoding UTF8

    Write-Output "✅ Created: $filePath"
}

Write-Output "✅✅ All components created successfully!"