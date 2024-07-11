import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import './AboutProject.css'
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";



const AboutProject = () => {

    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState("");
  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/episode"
        );
  
        setEpisodes(response.data.results);
      } catch (error) {
        if (error.response) {
          // Sunucu yanıt döndürdü ancak status kodu 2xx aralığında değil
          console.error("Hata Mesajı:", error.message);
          console.error("Yanıt Verisi:", error.response.data);
          console.error("Yanıt Durumu:", error.response.status);
          console.error("Yanıt Başlıkları:", error.response.headers);
          setError(`Sunucu hatası: ${error.response.data}`);
        } else if (error.request) {
          // İstek gönderildi ancak yanıt alınamadı
          console.error("İstek Verisi:", error.request);
          setError("Sunucuya ulaşılamıyor.");
        } else {
          // İstek oluşturulurken hata oluştu
          console.error("Hata Mesajı:", error.message);
          setError("Bir hata oluştu.");
        }
        console.error("Hata Yapılandırması:", error.config);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    if (error) {
      return <div className="error">{error}</div>;
    }

  return (
    <>
    <Header/>
    <div>
      <div className="about-project text-muted fs-5 mt-5">
        <h2>Projeyi Nasıl Yaptım?</h2>
        <h4 className="mt-4">Proje Oluşturma</h4>
        <ul>
          <li>Masaüstünde bir dosya oluşturdum.</li>
          <li>
            Visual Studio Code'da terminali açtım terminalden oluşturduğum
            dosyaya ulaştım.{" "}
            <a
              target="_blank"
              href="https://medium.com/@berkeyagizsevim/terminal-ile-dosya-i%CC%87%C5%9Flemleri-temel-terminal-komutlar%C4%B1-7736400fde0e"
            >
              Terminal Nasıl Kullanılır?
            </a>
          </li>
          <li>
            <code>npx create-react-app .</code> yazarak bulunduğun dosyanın
            içerisine projeyi kurdum.{" "}
            <a
              target="_blank"
              href="https://tr.legacy.reactjs.org/docs/create-a-new-react-app.html"
            >
              Farklı React Projesi Kurma Yöntemleri
            </a>
          </li>
          <li>
            Proje içerisinde bulunan gereksiz dosyaları sildim css'leri
            temizledim.
          </li>
          <li>
            <code>
              npm install axios react-bootstrap-icons react-router-dom
            </code>{" "}
            yazarak gerekli paketleri kurdum.
          </li>
          <li>
            Proje için <strong>Dosya yapısını</strong> kurdum.
            (assets,components,pages,services,utils)
          </li>
        </ul>
        <h4 className="mt-4">Axios ile veri çekme</h4>
        <div>
          <h5 className="mt-4">Async/Await</h5>
          Async/await, promise tabanlı asenkron işlemleri daha okunabilir hale
          getirir. async fonksiyonu, await anahtar kelimesiyle birlikte
          kullanılır ve await, bir promise'in çözülmesini bekler.
          <h5 className="mt-4">Fetch API / Axios Kullanımı</h5>
          Axios, HTTP istekleri yapmanıza yarayan popüler kütüphanedir.
        </div>
        <pre className="mt-2">
          <code>
            {`  const fetchData = async () => {
    try{
      const response = await axios.get('https://rickandmortyapi.com/api/episode');

      setEpisodes(response.data.results)
    }
    catch (error) {
      console.log('Error:',error)
    }
  };
`}
          </code>
        </pre>
        <p>Sonrasındada fetchData() yazarak fonksiyonu çağırıyorum.</p>
        <p>
          Şimdi gelen sonucu Mapleme yöntemiyle dönelim. bunu for döngüsüne
          benzetebiliriz.
        </p>
        <Table className="mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AIR DATE</th>
              <th>APISODE</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <tr key={episode.id}>
                <td>{episode.id}</td>
                <td>{episode.name}</td>
                <td>{episode.air_date}</td>
                <td>{episode.episode}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>
          Verileri çektik şimdi sırasıyla en temelde veri çekmek için hangi
          hookları kullandığımı açıklayacağım.
        </p>

        <h4>useState Hook'u:</h4>
        <ul>
          <li>
            <code>{`const [episodes, setEpisodes] = useState([]);`}</code>
          </li>
          <li>
            useState Hook'u, bir bileşen içinde durum (state) tanımlamak ve
            yönetmek için kullanılır. Burada, episodes adında bir durum
            değişkeni tanımladık ve başlangıç değerini boş bir dizi olarak
            ayarladık.
          </li>
        </ul>

        <h4>Axios ile Veri Çekme:</h4>
        <ul>
          <li>
            <code>{`const fetchData = async () => { ... }`}</code>
          </li>
          <li>
            fetchData adlı bir asenkron fonksiyon oluşturduk. Bu fonksiyon,
            axios.get kullanarak https://rickandmortyapi.com/api/episode
            URL'inden veri çeker. Gelen verileri setEpisodes fonksiyonunu
            kullanarak episodes durumuna kaydeder.
          </li>
        </ul>

        <h4>useEffect Hook'u:</h4>
        <ul>
          <li>
            <code>{`useEffect(() => { fetchData(); }, []);`}</code>
          </li>
          <li>
            useEffect Hook'u, bileşen yüklendiğinde (componentDidMount) veya
            belirli bir durum veya prop değiştiğinde çalıştırılması gereken yan
            etkileri (side-effects) yönetir. Burada, fetchData fonksiyonunu
            bileşen yüklendiğinde çalıştırmak için useEffect kullandık. İkinci
            argüman olarak boş bir dizi ([]) vererek, bu etki sadece bileşen ilk
            yüklendiğinde çalışacaktır.
          </li>
        </ul>

        <h4>Verileri Mapleme:</h4>
        <ul>
          <li>
            <code>{`{episodes.map((episode) => ( ... ))}`}</code>
          </li>
          <li>
            episodes durumundaki her bir bölümü (episode) bir tablo satırı{" "}
            {`(<tr>)`} olarak döndürmek için map fonksiyonunu kullandık. Her
            bölüm için episode.id, episode.name, episode.air_date ve
            episode.episode değerlerini ilgili hücrelerde {`(<td>)`}{" "}
            görüntülüyoruz.
          </li>
        </ul>

        <h4 className="mt-5">Peki verileri çektik ya hata olursa ?</h4>
        <p>
          Hata kontrolleri yapabilmek için bakmanızı önerdiğim bir sayfa var{" "}
          <a href="https://axios-http.com/docs/handling_errors">
            Axios Handlig Errors{" "}
          </a>
          Buradan bakarak hata olduğunda bunu kontrol edebilmek için başta
          yazdığım veri çekme fonksiyonunu biraz daha geliştirdim.
        </p>
        <p>Fonksiyonumun şuanki hali :</p>

        <pre className="mt-2">
          <code>
            {`  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );

      setEpisodes(response.data.results);
    } catch (error) {
      if (error.response) {
        // Sunucu yanıt döndürdü ancak status kodu 2xx aralığında değil
        console.error("Hata Mesajı:", error.message);
        console.error("Yanıt Verisi:", error.response.data);
        console.error("Yanıt Durumu:", error.response.status);
        console.error("Yanıt Başlıkları:", error.response.headers);
        setError(Sunucu hatası: {error.response.data});
      } else if (error.request) {
        // İstek gönderildi ancak yanıt alınamadı
        console.error("İstek Verisi:", error.request);
        setError("Sunucuya ulaşılamıyor.");
      } else {
        // İstek oluşturulurken hata oluştu
        console.error("Hata Mesajı:", error.message);
        setError("Bir hata oluştu.");
      }
      console.error("Hata Yapılandırması:", error.config);
    }
  };
`}
          </code>
        </pre>
        <h4 className="mt-5">Peki bu veriler başka bir component'te lazım olursa?</h4>
        <p>React uygulamalarında veri yönetimini ve veri paylaşımını daha kolay hale getiren yapılar vardır. Bunlardan en popüler olanları Redux ve Context API'dir. Bugün, Redux'ı kullanacağız. Redux'ı kurup dosya yapısını oluşturduktan sonra, Episodes ve Characters için Slice oluşturup axios ile veriyi çekeceğiz. Daha sonra, reducer'ı kullanarak bu API'yi istediğimiz yerde kullanacağız.</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutProject