<template>
  <div>
    <el-checkbox-group v-model="list" @change="handleChange">
      <el-checkbox-button v-for="item in items" :label="item" :key="item">{{item}}</el-checkbox-button>
    </el-checkbox-group>
    <el-input
      @change="handleChange"
      type="textarea"
      :rows="3"
      v-model="notes">
    </el-input>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'Board',
  data () {
    return {
      list: [],
      items: [],
      notes: '',
    }
  },
  methods : {
    handleChange () {
      api.updateEvaluation({
        items: this.list,
        notes: this.notes,
      })
    }
  },
  mounted () {
    api.getEvaluation().then(res => {
      this.items = Object.keys(res.data).filter(v => v != 'notes')
      this.notes = res.data.notes
      for (let i in res.data)
        if (res.data[i])
          this.list[this.list.length] = i
    })
  }
}
</script>

<style>
.el-checkbox-button {
  margin: 5px 0 5px;
}
.el-checkbox-button__inner {
  border: 1px solid #DCDFE6 !important;
}
.el-checkbox-button, .el-checkbox-button__inner {
  display: block !important;
}
.el-checkbox-button span.el-checkbox-button__inner {
  border-radius: 4px !important;
}
.el-checkbox-button.is-checked .el-checkbox-button__inner {
  box-shadow: 0 0 0 0 !important;
}
</style>
