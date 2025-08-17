#!/bin/bash

# Hedef klasör
TARGET_DIR="src/components"

# Oluşturulacak component isimleri
COMPONENTS=("Header" "TaskName" "DueDate" "StartTime" "RemindMe" "Categories" "CreateTask" "BottomSheet")

# Klasörü oluştur
mkdir -p $TARGET_DIR

# Her bir component için dosya oluştur ve içine rafce template yaz
for COMPONENT in "${COMPONENTS[@]}"
do
  FILE_PATH="$TARGET_DIR/$COMPONENT.jsx"
  echo "Creating $FILE_PATH"

  cat <<EOF > $FILE_PATH
import React from 'react';

const $COMPONENT = () => {
  return (
    <div>
      {/* $COMPONENT component */}
    </div>
  );
};

export default $COMPONENT;
EOF

done

echo "✅ All components created successfully!"