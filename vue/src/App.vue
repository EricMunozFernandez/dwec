<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <paginate ref="paginator" name = "arrayStrings" :list = "arrayStrings" :per = "5">
          <p v-for="string in paginated('arrayStrings')" :key="string.id">{{string}}</p>
        </paginate>
        <paginate-links
                for="arrayStrings"
                :show-step-links="true"
                :simple="{
                    prev: 'Anterior',
                    next: 'Siguiente'
                }"
        ></paginate-links>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        paginate:['arrayStrings'],
        arrayStrings:[
          "String1","String2","String3","String4","String5","String6","String7","String8","String9","String10",
          "String11","String12","String13","String14","String15","String16","String17","String18","String19",
          "String20",
        ],
      }
    }
  }
</script>

<style>
  ul{
    width:100%;
    list-style: none;
    text-align: center;
  }
  .paginate-links li {
    display: inline;
    background-color:#E43A48;
    color:white;
    padding:0.5rem;
    margin-left:0.3rem;
    margin-right: 0.3rem;
    cursor:pointer;
    border-radius: 3px;
  }
  .paginate-result{
    width: 100%;
    text-align:center;
    margin-bottom: 1rem;
  }
</style>
