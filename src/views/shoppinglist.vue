<template>
  <div>
    <Nav></Nav>
    <h1>shopping list</h1>
    <div class="row">
      <mdb-input label="Item" type="text" v-model="item" class="itemInput m-auto"/>
      <mdb-btn size="sm" @click="addItem" color="primary m-auto addItem">Add Item</mdb-btn>
    </div>
    <div class="row listItems">
      <div class="card" v-for="item in itemName">
        <div class="item card-body">
          <p>{{item}}</p>
        </div>
      </div>
    </div>

    <div class="row listItems"></div>
  </div>
</template>
<script>
import Nav from "../components/navbar/navbar.vue";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import { mdbInput, mdbBtn } from "mdbvue";
export default {
  components: {
    Nav,
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn
  },
  data: function() {
    return {
      itemName: [],
      item: ""
    };
  },
  methods: {
    addItem() {
      this.itemName.push(this.item);
      console.log("item ", this.itemName);
    }
  }
};
</script>
<style scoped>
.listItems {
  margin: 1rem 1rem;
  width: auto;
  height: auto;
  background-color: aliceblue;
}
.title {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.addItem {
  border-radius: 1rem !important;
  /* margin-right: 2rem !important; */
  margin-left: 1rem !important;
}
.itemInput {
  /* margin-left: 2rem !important; */
  margin-right: 1rem !important;
}
.item {
  align-content: center;
  width: auto;
  height: auto;
  margin: auto;
}
</style>
