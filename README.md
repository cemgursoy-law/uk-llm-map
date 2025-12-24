# Birleşik Krallık Üniversiteleri Hukuk Yüksek Lisans (LL.M.) Programları Haritası

## Proje Hakkında

Bu proje, Birleşik Krallık'taki üniversitelerin LL.M. (Hukuk Yüksek Lisansı) programlarını interaktif bir harita üzerinde görmenizi sağlayan kapsamlı bir web uygulamasıdır. Projede 72 farklı üniversitenin LL.M. programlarına dair bilgiler yer alır.

Harita üzerinde her üniversiteyi konumuna göre görebilir, üniversiteler arası karşılaştırma yapabilir ve detaylı programa dair bilgi edinebilirsiniz. Harita teknolojisi Leaflet.js ve OpenStreetMap altyapısı kullanılarak inşa edilmiştir. Tüm üniversiteler GPS koordinatlarıyla işaretlenmiş olup, her bir markera tıkladığında üniversite bilgileri, program özeti ve resmi web sitesi linkine ulaşabilirsiniz.

Hukuk Yüksek Lisansı yapmayı düşünen veya üniversite seçimi yapmakta zorlanan kişiler için haritada üniversiteleri hızlıca bulabilecekleri arama motoru da mevcuttur.

## Temel Özellikler

- **İnteraktif Harita**: Leaflet.js tabanlı, OpenStreetMap verisi kullanan hızlı ve duyarlı harita
- **Üniversite Bilgileri**: Her markera tıkladığınızda üniversite hakkında detaylı bilgiler içeren popup açılır
- **Dinamik Zoom**: Harita üzerinde yakınlaştırma/uzaklaştırma yaparken marker boyutları otomatik olarak ölçeklenir
- **Konuma Göre Görüntüleme**: GPS koordinatları ile tam konum gösterimi
- **Web Sitesi Erişimi**: Her üniversitenin resmi LL.M. program sayfasına doğrudan linkler
- **Logo Gösterimi**: Her üniversitenin logosunu marker üzerinde görüntüler
- **Responsive Tasarım**: Bilgisayar, tablet ve mobil cihazlarda uyumlu çalışır
- **Arama Motoru**: Üniversite adına veya şehir adına göre hızlı arama yapabilirsiniz

## Arama Motoru Özelliği

Uygulamanın sağ üst köşesinde bulunan arama kutusu ile üniversiteleri hızlıca bulabilirsiniz. Arama özelliği şu şekilde çalışır:

- **Üniversite Adına Göre Arama**: Üniversitenin tam adını veya bir kısmını yazarak arayabilirsiniz (örn: "King's" yazarsanız King's College London bulunur)
- **Şehir Adına Göre Arama**: Bir şehir adı yazarak o şehirdeki tüm üniversiteleri görebilirsiniz (örn: "London" yazarsanız Londra'daki tüm üniversiteler listelenir)
- **Canlı Filtreleme**: Yazarken anında harita güncellenir ve eşleşen üniversiteler gösterilir, diğerleri gizlenir
- **Boş Arama**: Arama kutosunu temizlerseniz tüm üniversiteler yeniden görünür hale gelir
- **Harfe Duyarsız Arama**: Arama yapılırken büyük/küçük harf farketmez

Örneğin:
- "Manchester" yazarsanız Manchester Üniversitesi bulunur
- "Cambridge" yazarsanız Cambridge Üniversitesi bulunur
- "Bristol" yazarsanız Bristol'daki üniversiteler listelenir
- "london" veya "LONDON" yazarsanız Londra'daki tüm üniversiteler görülür

## Veri İçeriği

Uygulamada 72 üniversitenin LL.M. programına dair kapsamlı bilgiler yer alır:

- **Üniversite Adı**: Tam resmi adı
- **Konum Bilgileri**: Enlem ve boylam (GPS koordinatları) - harita üzerinde tam konumu gösterir
- **Şehir**: Üniversitenin bulunduğu şehir adı
- **Program Özeti**: LL.M. programı hakkında Türkçe açıklama, uzmanlık alanları ve yıllık ücret bilgisi
- **Web Sitesi**: Üniversitenin resmi LL.M. program sayfasına doğrudan bağlantı
- **Logo**: Üniversitenin resmi logosu (marker üzerinde görüntülenir)

Örnek olarak, King's College London kaydında şu bilgiler yer alır:
- Adı: King's College London
- Konumu: Londra, GPS: 51.5117K, -0.1166B
- Program: Dünyanın en popüler ve prestijli LL.M. programlarından biri
- Ücret: 2026/27 yılı için 38,300 Pound
- Web: https://www.kcl.ac.uk

## Kullanılan Teknolojiler

- **HTML5**: Sayfa yapısı ve semantik işaretleme
- **CSS3**: Modern tasarım, responsive grid sistemi ve animasyonlar
- **JavaScript**: Harita etkileşimleri, veri işleme ve arama fonksiyonları
- **Leaflet.js**: Açık kaynak harita kütüphanesi (sürüm 1.9.4)
- **OpenStreetMap**: Ücretsiz ve açık kaynak harita verisi kaynağı

## Üniversite Programlarının Özellikleri

Uygulamada yer alan üniversitelerin LL.M. programları kapsamlı uzmanlık alanları sunmaktadır:

- **Ticaret ve Finans Hukuku**: Bankacılık Hukuku, Uluslararası Ticaret Hukuku, Kurumsal Yönetim
- **İnsan Hakları**: Uluslararası İnsan Hakları Hukuku, İnsancıl Hukuk
- **Çevre Hukuku**: Çevre Koruma, İklim Değişikliği Hukuku
- **Teknoloji ve Fikri Mülkiyet**: Siber Hukuk, Patent Hukuku, Telif Hakları
- **Kamu Hukuku**: Ceza Adaleti, İdari Hukuk
- **Uluslararası Hukuk**: Kamu Uluslararası Hukuku, Denizcilik Hukuku
- **Özel Uzmanlıklar**: Uzay Hukuku, Sağlık Hukuku, İnşaat Hukuku, Petrol ve Gaz Hukuku

Ücret bilgileri genellikle 15,700 Pound ile 38,300 Pound arasında değişmektedir (2026/27 akademik yılı için).

## Dosya Yapısı

```
uk-llm-map/
 index.html       # Ana HTML dosyası
 style.css        # CSS stil dosyası
 script.js        # JavaScript kodları ve harita mantığı
 data.json        # 72 üniversitenin bilgileri
 images/          # Üniversite logoları
 README.md        # Bu proje açıklaması
 LICENSE          # MIT Lisansı
```

## Nasıl Kullanılır?

### Yerel Olarak Çalıştırmak

1. Proje dosyalarını bilgisayarınıza indirin veya klonlayın
2. Proje klasörüne girin:
   ```
   cd uk-llm-map
   ```
3. Basit bir HTTP sunucusu başlatın:
   - **Python 3** kullananlar:
     ```
     python -m http.server 8000
     ```
   - **Python 2** kullananlar:
     ```
     python -m SimpleHTTPServer 8000
     ```
   - **Node.js** kullananlar:
     ```
     npx http-server -p 8000
     ```
4. Web tarayıcınızı açın ve şu adresi yazın:
   ```
   http://localhost:8000
   ```
5. Harita yüklendikten sonra:
   - Markerlara tıklayarak üniversite bilgilerine ulaşabilir
   - Arama kutosunu kullanarak üniversite arayabilir
   - Harita üzerinde yakınlaştırma/uzaklaştırma yapabilirsiniz

### GitHub Pages ile İnternet Üzerinde Yayınlamak

Projeyi herkesin erişebileceği şekilde yayınlamak için GitHub Pages kullanabilirsiniz:

1. GitHub'da yeni bir hesap açın (varsa oturum açın)
2. Yeni bir public repository oluşturun ve adını 'uk-llm-map' olarak ayarlayın
3. Tüm proje dosyalarını (index.html, script.js, style.css, data.json, images klasörü, README.md, LICENSE) bu repository'e yükleyin
4. Repository ayarlarını açın ve "Pages" sekmesine gidin
5. Source (Kaynak) bölümünde main branch'i (dal) ve root (kök) klasörünü seçin
6. "Save" (Kaydet) butonuna tıklayın
7. Kısa süre sonra (1-2 dakika) harita şu adreste yayında olur:
   ```
   https://[github-kullanıcı-adınız].github.io/uk-llm-map/
   ```

Örneğin, kullanıcı adınız "ahmet" ise, harita şu adreste erişilebilir olacaktır:
```
https://ahmet.github.io/uk-llm-map/
```

## Üniversiteler

Haritada Birleşik Krallık'ın ön planda gelen üniversiteleri yer almaktadır. Başlıca üniversiteler:

- University of Cambridge (Cambridge)
- University of Oxford (Oxford)
- King's College London (Londra)
- London School of Economics (Londra)
- University of Manchester (Manchester)
- University of Bristol (Bristol)
- University of Warwick (Coventry)
- University of Glasgow (Glasgow)
- University of Edinburgh (Edinburgh)
- Queen Mary University of London (Londra)
- University of Sheffield (Sheffield)
- University of Birmingham (Birmingham)
- University of Nottingham (Nottingham)
- University of Leeds (Leeds)
- University of Durham (Durham)

Bunların yanı sıra Lancaster, York, Essex, Kent, Liverpool, Exeter, Leicester, Dundee, Aberdeen, Southampton ve daha birçok üniversite haritada yer almaktadır. Toplam 72 üniversite bulunmaktadır.

## Geliştirme ve Katkı

Projeyi geliştirmek veya yeni üniversite eklemek için:

1. Dosyaları yerelde düzenleyin
2. 'data.json' dosyasına yeni üniversite ekleyin
3. 'script.js' ve 'style.css' dosyalarını gerektiğinde özelleştirin
4. Değişiklikleri GitHub'a yükleyin

### Yeni Üniversite Ekleme

'data.json' dosyasına aşağıdaki gibi bir kayıt ekleyebilirsiniz:

```json
{
  "name": "University Name",
  "lat": 51.5074,
  "lon": -0.1278,
  "city": "London",
  "website": "https://example.com/llm",
  "law_masters_summary": "Program açıklaması Türkçe olarak yazılmalıdır. Ücret ve uzmanlık alanları hakkında bilgi içerebilir.",
  "logo_url": "images/university_name.png"
}
```

Dikkat edilecek noktalar:
- 'lat' (enlem) ve 'lon' (boylam) alanları ondalık sayı olmalıdır
- 'law_masters_summary' Türkçe yazılmalıdır
- Logo dosyası 'images/' klasöründe olmalıdır
- Web sitesi linki HTTPS protokolü ile başlamalıdır

## Lisans

Bu proje MIT lisansı ile sunulmaktadır. Detaylar için LICENSE dosyasına bakabilirsiniz.

## Faydalı Bağlantılar

- Leaflet.js: https://leafletjs.com/
- OpenStreetMap: https://www.openstreetmap.org/
- GitHub Pages: https://pages.github.com/

---

**Sürüm**: 1.0.0
**Son Güncelleme**: Aralık 2025
**Üniversite Sayısı**: 72
**Desteklenen Diller**: Türkçe (UI ve program açıklamaları)
