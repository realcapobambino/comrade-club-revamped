import { reactive, ref } from "vue";
import axios from "axios";

const getPosts = () => {
  const posts = ref([]);

  // handle request errors
  const error = ref(null);

  // const showPosts = ref(true)

  const load = async () => {
    try {
      // let data = await fetch('https://dummyjson.com/posts/?limit=10&skip=5&select=key1,key2,key3/', {
      //     method: 'GET', /* or POST/PUT/PATCH/DELETE */
      // })
      // if (!data.ok) {
      //     throw Error('no data available')
      // }

      // posts.value = await data.json()
      // console.log(posts)
      const response = await axios.get("https://dummyjson.com/posts/?limit=5", {
        // url: "https://dummyjson.com/posts/",

        transformRequest: [
          function (data, headers) {
            // Do whatever you want to transform the data

            return data;
          },
        ],
        // `transformResponse` allows changes to the response data to be made before
        // it is passed to then/catch
        transformResponse: [
          function (data) {
            // Do whatever you want to transform the data

            return data;
          },
        ],
        // `responseType` indicates the type of data that the server will respond with
        // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
        //   browser only: 'blob'
        responseType: "json", // default
      });

      posts.value = response.data;

      //
    } catch (error) {
      console.log(error);
    }

    console.log(posts.value);
  };
  return { posts, error, load };
};

export default getPosts;
