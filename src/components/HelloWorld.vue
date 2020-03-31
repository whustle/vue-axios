<template>
  <div class="hello">
    <button @click='getAllVolume'>获取volume</button>
    <a-table
    :columns="columns"
    :rowKey="record => record.volumeName"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
  </a-table>
  </div>
</template>

<script>
import { getAllVolume } from '@/api/volume/volume'
import reqwest from 'reqwest';
  const columns = [
    {
      title: 'UsedSize',
      dataIndex: 'usedSize',
      sorter: true,
      width: '20%',
    },
    {
      title: 'AvailableSize',
      dataIndex: 'availableSize',
      width: '20%',
    },
  ];

  export default {
    mounted() {
      this.fetch();
    },
    data() {
      return {
        data: [],
        pagination: {},
        loading: false,
        columns,
      };
    },
    methods: {
      handleTableChange(pagination, filters, sorter) {
        console.log(pagination);
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },
      fetch(params = {}) {
        console.log('params:', params);
        this.loading = true;
        getAllVolume().then(res => {
          console.log('res')
          console.log(res)
          const pagination = { ...this.pagination };
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = 200;
          this.loading = false;
          this.data = res.data.volumes;
          console.log('this.data')
          console.log(this.data)
          this.pagination = pagination;
        });
      },
      getAllVolume() {
        getAllVolume().then(response => {
          console.log(response.data.volumes)
        })
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
