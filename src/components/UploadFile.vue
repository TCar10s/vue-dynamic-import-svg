<template>
  <el-upload
    action="#"
    :auto-upload="false"
    v-model:file-list="fileList"
    list-type="text"
    multiple
    accept="image/jpeg,image/png"
    @on-change="handleFileChange"
  >
    <el-icon><Plus /></el-icon>
    <template #tip>
      <p>Only jpg/png files with a size less than 500kb</p>
    </template>

    <template #file="{ file }">
      <div
        style="display: flex; justify-content: space-between; padding: 0.5rem"
      >
        <span
          style="
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 10ch;
          "
        >
          {{ file.name }}
        </span>
        <span> {{ fileSize(file.size) }} KB </span>
        <span style="cursor: pointer" @click="handleRemove(file)">
          <el-icon><Close /></el-icon>
        </span>
      </div>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import { ref, toRaw, watch } from 'vue';
import { Close, Plus } from '@element-plus/icons-vue';

import type { UploadUserFile } from 'element-plus';

const fileList = ref<UploadUserFile[]>([]);

const handleFileChange = (file: UploadUserFile, fileList: UploadUserFile[]) => {
  console.log(file, fileList);
};


watch(fileList, (val) => {
  console.log(toRaw(fileList.value));
});

const fileSize = (size: number) => {
  return Math.round(size / 1024);
};

const handleRemove = (file: UploadUserFile) => {
    fileList.value = fileList.value.filter((item) => item.uid !== file.uid);
};
</script>
