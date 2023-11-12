// import logo from './logo.svg';
import { FileUploader } from 'react-drag-drop-files';
import { useEffect, useState } from 'react';
import { listAll, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';
import { v4 } from 'uuid';
import axios from 'axios';
import { predictData } from '../data/predict';
import Nav from '../components/nav';
import Footer from '../components/footer';

const fileTypes = ['JPG', 'PNG'];

function Classification() {
  const [ImageUpload, setImageUpload] = useState(null);
  const [data, setData] = useState();
  const [url, setUrl] = useState();
  const [ImageList, setImageList] = useState();
  const imageListRef = ref(storage, 'images/');

  // const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setImageUpload(file);
  };
  const [loading, setLoading] = useState(false);
  const [dataNotEmpty, setDataNotEmpty] = useState(false);

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

  const handleDelete = () => {
    window.location.reload();
  };

  const uploadImage = () => {
    setData('');
    setLoading(true);
    if (ImageUpload == null) return;

    const imageRef = ref(storage, `images/${ImageUpload.name + v4()}`);
    uploadBytes(imageRef, ImageUpload)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((downloadURL) => {
        console.log('Download URL', downloadURL);
        setUrl(downloadURL);
        predict(downloadURL);
        setLoading(false);
      });
    setDataNotEmpty(true);
  };

  useEffect(() => {}, []);

  return (
    <div className='App'>
      <Nav />
      <div className='flex flex-col items-center mt-10'>
        <h1 className='text-3xl md:text-[42px] md:-ml-60 font-bold mb-10 text-primary'>
          Unggah Gambar
        </h1>
        <FileUploader
          className='w-full h-96'
          handleChange={handleChange}
          name='file'
          types={fileTypes}
        />
        <div className='flex gap-3 mt-5'>
          <button
            className='bg-battery text-white w-36 py-2 text-sm rounded-md'
            onClick={uploadImage}
          >
            Uplod Image
          </button>
          <button
            className='bg-battery text-white w-36 py-2 text-sm rounded-md'
            onClick={handleDelete}
          >
            Hapus
          </button>
        </div>
        {dataNotEmpty ? (
          <>
            {loading ? (
              <h1 className='text-[42px] font-bold mb-10 text-primary'>
                Loading....
              </h1>
            ) : (
              <div className='flex flex-col items-center mt-20'>
                <div className='bg-primary w-full flex flex-col items-center py-10'>
                  <h1 className='text-2xl md:text-[42px] font-bold mb-10 text-white capitalize text-center'>
                    {/* Sampah {predictRes[data]} */}
                    {data !== 'human' ? 'Sampah' : ''}{' '}
                    {data === 'battery'
                      ? 'Baterai'
                      : data === 'cardboard'
                      ? 'Kardus'
                      : data === 'clothes'
                      ? 'Pakaian'
                      : data === 'glass'
                      ? 'Beling'
                      : data === 'human'
                      ? 'Ini Teman Anda Bukan Sampah Weeeee!'
                      : data === 'metal'
                      ? 'Logam'
                      : data === 'organic'
                      ? 'Organik'
                      : data === 'paper'
                      ? 'Kertas'
                      : data === 'plastic'
                      ? 'Plastik'
                      : data === 'shoes'
                      ? 'Sepatu'
                      : data === 'styrofoam'
                      ? 'Styrofoam'
                      : ''}
                  </h1>
                  <img
                    className='rounded-3xl w-4/5 md:w-auto md:h-96'
                    src={url}
                    alt={data}
                  />
                </div>
                <div className='w-full px-10 md:px-0 md:w-3/4 2xl:w-1/2 grid md:grid-rows-2 gap-5 my-20'>
                  <div className='grid md:grid-cols-2 gap-5'>
                    <div className='w-full h-full border-2 rounded-xl border-primary  p-5'>
                      <h1 className='text-primary font-bold text-xl text-center mb-2'>
                        Cara Daur Ulang
                      </h1>
                      <p className='text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It
                      </p>
                    </div>
                    <div className='w-full h-full border-2 rounded-xl border-primary  p-5'>
                      <h1 className='text-primary font-bold text-xl text-center mb-2'>
                        Cara Buang
                      </h1>
                      <p className='text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It
                      </p>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-5'>
                    <div className='w-full h-full border-2 rounded-xl border-secondary  p-5'>
                      <h1 className='text-primary font-bold text-xl text-center mb-2'>
                        Cara Daur Ulang
                      </h1>
                      <p className='text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It
                      </p>
                    </div>
                    <div className='w-full h-full border-2 rounded-xl border-secondary  p-5'>
                      <h1 className='text-primary font-bold text-xl text-center mb-2'>
                        Cara Buang
                      </h1>
                      <p className='text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It
                      </p>
                    </div>
                  </div>
                </div>
                {/* <h1 className='text-[42px] font-bold mb-10 text-primary'>
          {predictData[data]}
        </h1> */}
              </div>
            )}
          </>
        ) : (
          ''
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Classification;
