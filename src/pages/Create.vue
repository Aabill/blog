<script setup lang="ts">

</script>

<template>
  <div class="max-w-7xl m-auto">
      <!-- <div class="text-xl font-bold">
        <h1>{{ uid.length > 0 ? 'Create Page' : 'Sign In Noob!'}}</h1>
      </div> -->

      
      <div v-if="uid.length > 0" class="p-3.5">
          <h1 class="text-2xl font my-5">Create {{ $route.params.category}}</h1>
          <hr>
        <div id="editorjs" class="my-5"></div>
        <div class="w-auto mx-auto text-center text-md lg:text-lg ">
          <button class="max-w-xs bg-blue-500 text-gray-200 py-2 px-5 hover:bg-blue-600" v-if="uploadButton" @click="uploadArticle()">Post</button>
        </div>
      </div>
      <div v-else>
        <div class="w-full h-screen flex justify-center items-center">
          <button @click="firbaseAuthGH()" class="w-full max-w-xs text-center p-3.5 bg-gray-600 text-white text-xl border-solid border rounded-lg">Sign in</button>
        </div>
      </div>
    
  </div>
    
</template>

<style scoped>

</style>

<script lang="ts">

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {default as EditorJS} from '@editorjs/editorjs';

import {default as editorHeader} from '@editorjs/header';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, push, onChildAdded } from "firebase/database";
import firebaseConfig from "../../firebase.config.json";

import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
declare global {
    interface Window { editor: EditorJS; }
}

import {defineComponent} from 'vue'
import {ref as refStorage, getStorage, uploadBytes, getDownloadURL} from "firebase/storage";
export default defineComponent({
    data() {
      return {
        uid: "",
        uploadButton: false
      }
    },
components: {
    QuillEditor,
  },
  mounted() {
    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const db = getDatabase(app);
    // console.log(db)

    // const dbRef = ref(db)
    // get(child(dbRef, `posts`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val())
    //   } else {
    //     console.log("No data available")
    //   }
    // }).catch((error) => {
    //   console.log(error)
    // })
  },
  methods: {
    saveArticle() {
      return window.editor.save().then((saved) => {
        return saved;
      });
    },
    firbaseAuthGH() {
    // this.saveArticle();

    const provider = new GithubAuthProvider();
    provider.setCustomParameters({
      'allow_signup': 'false'
    });
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    signInWithPopup(auth, provider)
    .then((result)  => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      this.uid = user.uid;
      // console.log(user);
      this.initializeEditorjs();
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
    },
    initializeEditorjs() {
      let uid = this.uid
      window.editor = new EditorJS({
        holder: 'editorjs',
        tools: { 
            header: {
              class: editorHeader, 
              inlineToolbar: ['link'] 
            },
            list: { 
              class: List, 
              inlineToolbar: true 
            },
            image: {
              class: ImageTool,
              config: {
              uploader: {
                async uploadByFile(file : File) {
                  console.log(file)
                  console.log(uid)
                  const app = initializeApp(firebaseConfig);
                  const storage = getStorage(app);
                  const storageRef = refStorage(storage, 'images/' + file.name)
                  await uploadBytes(storageRef, file).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                    console.log(snapshot);
                  });
                  const url = await getDownloadURL(refStorage(storage, 'images/' + file.name))
                  .then(( url ) => {
                    return url
                  })
                  return {
                    success: 1,
                    file: {
                        url: url
                    }
                  }
                }
              }
            }
          }
        },
        /**
          * onReady callback
          */
        onReady: () => { this.uploadButton = true},
        
        /**
          * onChange callback
          */
        onChange: () => {
            console.log('Now I know that Editor\'s content changed!');
          }
      })
  },
  async uploadArticle() {
    const saved = await this.saveArticle();
    
    const app = initializeApp(firebaseConfig)
    const db = getDatabase(app);
    const postListRef = ref(db, `${this.$route.params.category}`);
    const newPostRef = push(postListRef);
    set(newPostRef, saved)
      .then( () => {
        // const db = getDatabase();
        // const commentsRef = ref(db, `users/${this.uid}/posts`);
        // onChildAdded(commentsRef, (data) => {
        //   // addCommentElement(postElement, data.key, data.val().text, data.val().author);
        //   console.log(data);
        // });
        console.log(newPostRef.key);
        this.$router.push(`/${this.$route.params.category}/${newPostRef.key}`)
      });
  },

  },
  

})
</script>
