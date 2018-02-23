<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col>
            <span>请输入 UP 主 ID:</span>
          </el-col>
          <el-col :span="18">
            <el-input
              placeholder="请输入 UP 主 ID"
              v-model="uid"
              clearable>
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button @click="getUp">确定</el-button>
          </el-col>
        </el-row>

      </el-col>

      <el-col :span="12">
        <el-row>
          <el-col>
            <span>或者直接输入昵称:</span>
          </el-col>
          <el-col :span="18">
            <el-input
              placeholder="输入昵称"
              v-model="nickname"
              clearable>
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button @click="fromNickNameGetUp">确定</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-container>
      <play-count :Up="up"></play-count>
    </el-container>
  </div>
</template>

<script>

import {handleUpSubmit} from '@/until/handleUpInfo'
import {handleUserSearch} from '@/until/handleSearch'
import PlayCount from './PlayCount'

export default {
  components: {PlayCount},
  name: 'up',
  data: function () {
    return {
      nickname: '',
      uid: '423895',
      up: null
    }
  },
  methods: {
    getUp: async function () {
      this.up = await handleUpSubmit(this.uid)
    },
    fromNickNameGetUp: async function () {
      const id = await handleUserSearch(this.nickname)
      this.up = await handleUpSubmit(id)
    }
  }
}
</script>

<style scoped>

</style>
