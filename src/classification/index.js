// import logo from './logo.svg';

import { useEffect, useState } from 'react';
import { listAll, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';
import { v4 } from 'uuid';
import axios from 'axios';
import { predictData } from '../data/predict';

function Classification() {
  const [ImageUpload, setImageUpload] = useState(null);
  const [data, setData] = useState();
  const [url, setUrl] = useState();
  const [ImageList, setImageList] = useState();
  const imageListRef = ref(storage, 'images/');

  const [loading, setLoading] = useState(false);

  const predictRes = {
    plastic: 'Plastik Caranya di lempar bae',
    organic: 'Organik di makan lagi boleh',
    battery: 'Batre buat tamia',
    cardboard: 'Kardus di kiloin',
    clothes: 'Pakaian bisa dipake lagi',
    glass: 'Kaca jangan di lempar di jalanan',
    metal: 'Metal bagusnya di kiloin sih',
    human: 'Sampah Masyarakat',
    paper: 'Kertas buat bikin pesawat sabi sih',
    shoes: 'Sepatu bisa lah di pake lagi',
  };
  const predict = async (url) => {
    await axios
      .post(
        'http://127.0.0.1:5000/sampah',
        { img: url },
        {
          headers: {
            Accept: 'application/json, text/plain',
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then((res) => {
        setData(res.data.prediksi);
        console.log(res.data.prediksi);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImage = () => {
    setData('');
    setLoading(true);
    if (ImageUpload == null) return;

    const imageRef = ref(storage, `images/${ImageUpload.name + v4()}`);
    uploadBytes(imageRef, ImageUpload)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
        // getDownloadURL().then(function (downloadURL) {
        //   console.log('File available at', downloadURL);
        // });
      })
      .then((downloadURL) => {
        console.log('Download URL', downloadURL);
        // apii(downloadURL);
        setUrl(downloadURL);
        predict(downloadURL);
        setLoading(false);
      });

    // await axios
    //   .get(
    //     'http://127.0.0.1:5000/sampah',
    //     { params: { img: url } },
    //     {
    //       headers: {
    //         Accept: 'application/json, text/plain',
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     },
    //   )
    //   .then((res) => {
    //     setData(res.data.prediksi);
    //     console.log(res.data.prediksi);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    // axios
    //   .get(
    //     'http://127.0.0.1:5000/test',
    //     // { params: { img: url } },
    //     {
    //       headers: {
    //         Accept: 'application/json, text/plain',
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     },
    //   )
    //   .then((res) => {
    //     setData(res);
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // listAll(imageListRef).then((res) => {
    //   res.items.forEach((item) => {
    //     getDownloadURL(item).then((url) => {
    //       // setImageList
    //       console.log(url);
    //     });
    //   });
    // });
  }, []);

  return (
    <div className='App'>
      <input
        type='file'
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Uplod Image</button>
      <button>tes</button>
      <p>Hasil Prediksi: {loading ? 'Loading....' : data}</p>
      <p>{predictRes[data]}</p>
      <img
        style={{ height: 100 }}
        src={url}
        alt={data}
      />
      <h1>{predictData[data]}</h1>
    </div>
  );
}

export default Classification;
