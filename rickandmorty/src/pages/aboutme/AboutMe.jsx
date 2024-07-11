import React from 'react'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div>
        <Header/>
        <div className='about-me text-muted fs-5 mt-5'>
            Merhaba, bu sayfayı hem bu projeyi nasıl yaptığımı hem de biraz da kendi hikayemi anlatmak için ekledim.
            <br />
            <br />
            Front-end geliştirme, çok sevdiğim ve eğlendiğim, hobi olarak yaptığım bir alan. Uzun yıllar <strong>React</strong>'a girmekten çekindiğim için tasarımlarımı HTML ve CSS ile yaptım. Bu süreçte HTML ve CSS'de istemeden de olsa oldukça geliştiğimi fark ettim. Ancak, bir eğitimde projeyi <strong>React</strong> ile yapmamız gerektiğinde bu kütüphaneyi öğrenmek zorunda kaldım. Kullanışlılığını çok sevdim ve o zamandan beri 8 aydır React ile çalışıyorum.
            <br />
            <br />
            Tobeto adlı kurumda <strong>Engin Demiroğ</strong>'dan <strong>.NET</strong> eğitimi aldıktan sonra backend geliştirmeye de ilgi duymaya başladım. Veritabanı ile çalışmanın çok keyifli olduğunu fark ettim. <strong>Agito</strong> şirketinin sınavını kazandıktan sonra aldığım <strong>SQL</strong> eğitimi ile veritabanı bilgim daha da arttı. <strong>PL/SQL Oracle</strong> konusunda yeterli düzeye ulaştım ve proje geliştirdim. Aynı zamanda, eğitim aldığım kurum Tobeto'da bir öğrenci yönetim sisteminin ihtiyacı olduğunu fark ettim T-SQL ile proje geliştirip .NET Web API ile database first yaklaşımıyla proje yaptım ve front-end tasarımlarını <strong>React</strong> ile tamamladım.
            Geliştirdiğim proje, öğrencilerin CV'lerini kaydeden ve yöneticilere eklettiğim mailleri istedikleri öğrenciye ya da öğrencilere toplu olarak gönderen bir öğrenci yönetim sistemiydi.
            <br />
            <br />
             <i>Bugün geldiğim noktada, öğrendiğim her şeyi ne İtalya'daki yazılım stajımda ne de birincilikle bitirdiğim okulda öğrendiğimi fark ettim. Bize verdiğiniz projeler, sizin için basit vakalar olsa bile, bizi çok ileri taşıdığına inanıyorum.</i>

             <h3 className='mt-4 text-black'>Rick and Morty Projemi Nasıl Yaptım ?</h3>

             <ul>
                <li>Github Repository oluşturdum (Normalde issueler oluşturur adım adım giderdim fakat bunun için zamanım yoktu) ;  <a target="_blank" href="https://github.com/hasancanmidi/Massive-Bioinformatics">Massive-Bioinformatics</a></li>

                <li>React projemi <code>npx create-react-app</code> ile oluşturdum.</li>

                <li>İçeride ki gereksiz dosyaları temizledikden sonra Projemi yazacağım <strong>dosya yapısını</strong> kurdum.</li>

                <li>Redux'ı kurdum <code>npm install @reduxjs/toolkit</code></li>

                <li><code>Axios bootstrap react icons react-router-dom react-slick primereact </code>'i projeme ekledim.</li>

                <li>Header ve Footer tasarımını yaptım. Tablo tasarımları için Prime React'ın Data Tablolarını kullandım. Çok basit ve kolay bir kullanımı var.</li>

                <li>Son olarak Axios ile Apilerimi Redux'a çekip istediğiniz filtreleme özelliklerini componentlere ekledim.</li>
             </ul>        
        </div>
        <Footer/>
    </div>
  )
}

export default AboutMe