<template>
  <div>
    <h1>shopping list</h1>
    <div class="row">
      <mdb-input
        label="Item"
        type="text"
        v-model="item"
        class="itemInput m-auto"
      />
      <mdb-btn
        size="sm"
        type="button"
        @click="addItem"
        color="primary m-auto addItem"
        >Add Item</mdb-btn
      >
    </div>
    <div class="row listItems">
      <div class="col-12 card mt-2" v-for="item in itemName" :key="item.id">
        <div class="item card-body">
          <label class="w-25">{{ item.items }}</label>
          <mdb-btn
            size="sm"
            :id="item.id"
            type="button"
            @click="increment($event)"
            color="success ml-5 increment"
            >+</mdb-btn
          >
          <mdb-btn
            size="sm"
            :id="item.id"
            type="button"
            @click="decrement($event)"
            color="primary ml-5 decrement"
            >-</mdb-btn
          >
          <span class="ml-5">count {{ item.count }}</span>
        </div>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa incidunt
      totam labore corrupti odit distinctio consectetur, dolor quidem quisquam
      velit fugit atque soluta, neque perferendis eos, reprehenderit fuga iusto
      doloribus adipisci voluptatibus non blanditiis beatae. Odio, qui error
      voluptatum et officia dolores aperiam eaque? Fuga quis officiis hic dolore
      sequi minus minima, facere neque perferendis quibusdam. Excepturi quod
      quidem aperiam voluptatum, distinctio soluta corporis ad repellendus quae
      quos. Natus eos, rem dolores veritatis ipsum quia facilis odio culpa
      eveniet corrupti animi ab a saepe eaque non nam maxime cum blanditiis amet
      soluta praesentium sunt tempore recusandae! Doloremque porro eius
      similique voluptatum quos ab dolor alias quisquam saepe illum quia nam
      repudiandae officia voluptatem aperiam laudantium fugit praesentium,
      nesciunt sequi ex, ad consequuntur corrupti tempora veniam. Sint non
      labore modi, quos expedita et consequatur, impedit fugiat libero quisquam
      quidem nulla pariatur velit iusto vitae dolores unde commodi molestias
      necessitatibus praesentium corrupti nostrum! Veniam ducimus aperiam rerum,
      deleniti voluptas nemo omnis in iure dignissimos eius maxime nostrum quia
      odit, saepe ea voluptatem quasi dolores fuga accusamus ad ex corrupti.
      Aliquam sed est officia harum corporis laborum fugit quo. Doloremque
      impedit dolorem quas amet officiis, est blanditiis quasi esse cum
      laudantium ea voluptatibus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Modi, illum voluptatem laborum debitis, officia natus
      corrupti doloremque et neque quisquam adipisci temporibus! Dolore fugiat
      molestias iste asperiores quo ex praesentium, eveniet qui repellat iusto
      quia tempore, dolorem provident inventore quod. Quidem dolores magni
      voluptates optio sint minima quam magnam repudiandae molestiae, et aliquam
      voluptatem! Recusandae nulla rem suscipit nobis iusto, debitis provident
      ipsa adipisci beatae doloribus error sunt ea laborum qui minus? Quos
      rerum, voluptatem aliquid totam iure quisquam fuga, est earum eum quis
      odio ipsum incidunt rem asperiores qui reiciendis libero dignissimos porro
      atque perferendis! Consequatur, iure placeat perferendis aperiam fugiat
      illo enim. Explicabo nostrum sequi, id qui excepturi debitis rerum ea
      nobis unde reiciendis repudiandae hic esse beatae eveniet voluptatum
      repellendus optio dicta ipsum veniam! A placeat natus minima aperiam
      quaerat tempore maiores laborum animi dicta iure officiis totam non
      obcaecati odio harum magnam alias, esse unde fuga nihil corrupti,
      assumenda ut? Eveniet temporibus laborum qui sit a quidem officia possimus
      quibusdam aut molestiae deserunt ex aspernatur error, vero praesentium
      expedita labore modi voluptatibus assumenda. Laudantium quod voluptas
      dolor? Dolor tempora, sequi consequatur veniam blanditiis doloribus error,
      amet iusto quibusdam consequuntur voluptatem eius. Blanditiis culpa sequi
      nisi error.
    </p>
  </div>
</template>
<script>
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import { mdbInput, mdbBtn } from "mdbvue";
import { constants } from "crypto";
export default {
  components: {
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn
  },
  data: function() {
    return {
      itemName: [],
      item: "",
      count: 0
    };
  },
  methods: {
    addItem() {
      this.itemName.push({
        items: this.item,
        id: this.itemName.length + 1,
        count: 0
      });
      console.log("item ", this.itemName);
    },
    increment(event) {
      this.itemName.map(item => {
        if (item.id.toString() === event.target.id.toString()) {
          item.count = item.count + 1;
          console.log("it is if");
        } else {
          console.log("it is else");
        }
      });
      console.log("increment", this.itemName);
    },
    decrement(event) {
      this.itemName.map(item => {
        if (item.id.toString() === event.target.id.toString()) {
          if (item.count === 0) {
            item.count = 0;
          } else if (item.count !== 0) {
            item.count = item.count - 1;
          }
        } else {
          console.log("it is else");
        }
      });
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
  padding: 2rem;
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
  margin-left: 10rem;
  margin-right: 10rem;
  text-align: left;
  /* border: 2px solid black; */
}
.increment {
}
.decrement {
}
</style>
