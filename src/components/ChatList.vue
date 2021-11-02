<template>
  <div>
    <ul>
      <li v-for="chat in chats" :key="chat.createdAt">
        <router-link :to="{ name: 'chat', params: { id: chat.id } }">
          {{ chat.id }}
        </router-link>
      </li>
    </ul>
    <button
      @click="
        createChatRoom();
        callData();
      "
    >
      createChatRoom
    </button>
  </div>
</template>
<script>
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export default {
  data() {
    return {
      chats: [],
    };
  },
  created: async function () {
    const q = await query(
      collection(db, "chats"),
      where("owner", "==", this.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.chats.push(doc);
    });
    // onSnapshot(q, (querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     this.chats.push(doc);
    //     console.log(this.chats);
    //   });
    // });
  },
  methods: {
    async callData() {
      const q = await query(
        collection(db, "chats"),
        where("owner", "==", this.uid)
      );
      this.chats = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.chats.push(doc);
      });
    },
    async createChatRoom() {
      await addDoc(collection(db, "chats"), {
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid],
      });
    },
  },
  props: ["uid"],
};
</script>