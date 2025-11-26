# Birleşik Krallık Üniversite Hukuk Haritası
## UK University Law Programs Interactive Map

Birleşik Krallık'taki üniversitelerin Hukuk Yüksek Lisansı (LL.M.) programlarını gösteren interaktif bir harita uygulaması.

An interactive map application showcasing Law Master's (LL.M.) programs at universities across the United Kingdom.

### 🌍 Özellikler / Features

- **Interaktif Harita**: Leaflet.js kullanarak gerçek zamanlı harita görüntüleme
- **Üniversite Bilgileri**: Her üniversite için program detayları ve web siteleri
- **Zoom ve Pan**: Harita üzerinde zoom yapabilir, harita içinde gezinebilirsiniz
- **Marker Animasyonu**: Zoom seviyesine göre dinamik marker boyutlandırması
- **Popup Bilgiler**: Marker'a tıklayarak üniversite ve program detaylarını görüntüleyin

### 📊 Veri

72 üniversitenin LL.M. programı bilgileri içerir:
- Üniversite adı
- Konum (enlem/boylam)
- Şehir
- Program özeti
- Web sitesi
- Logo

### 🛠️ Teknolojiler

- **HTML5**: Sayfa yapısı
- **CSS3**: Stil ve responsive tasarım
- **JavaScript**: Harita etkileşimleri ve veri işleme
- **Leaflet.js**: Harita kütüphanesi
- **OpenStreetMap**: Harita kaynağı

### 📁 Dosya Yapısı

```
uk-llm-map/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS stilleri
├── script.js           # JavaScript mantığı
├── data.json           # Üniversite verileri
├── images/             # Üniversite logoları
├── README.md           # Bu dosya
└── LICENSE             # MIT Lisansı
```

### 🚀 Kullanım

#### Yerel Olarak Çalıştırma

1. Proje klasörüne gidin:
```bash
cd uk-llm-map
```

2. Basit bir HTTP sunucusu başlatın:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (http-server):**
```bash
npx http-server -p 8000
```

3. Tarayıcınızda açın:
```
http://localhost:8000
```

#### GitHub Pages ile Yayımlama

Bu proje GitHub Pages ile otomatik olarak yayımlanabilir. Aşağıdaki adımları izleyin:

1. GitHub'da yeni bir public repository oluşturun: `uk-llm-map`
2. Tüm dosyaları bu repository'e yükleyin
3. Repository Settings → Pages → Source: `main` / `root` seçin
4. Birkaç dakika sonra haritanız şu adreste yayına açılacak:
   ```
   https://[kullanıcıadınız].github.io/uk-llm-map/
   ```

### 📋 Üniversiteler Listesi

Harita aşağıdaki üniversiteleri içerir (alfabetik sıra):

- University of Cambridge
- University of Oxford
- King's College London
- London School of Economics (LSE)
- University of Manchester
- University of Bristol
- University of Warwick
- University of Glasgow
- University of Edinburgh
- Queen Mary University of London (QMUL)
- University of Sheffield
- University of Birmingham
- University of Nottingham
- University of Leeds
- University of Durham
- ve 57 daha fazla üniversite...

### 🎯 Üniversite Programı Özellikleri

Her üniversitenin kaydında:
- **Program Adı**: Spesifik LLM yönü (Ticaret Hukuku, İnsan Hakları, vb.)
- **Ücret**: Yıllık tuition maliyeti (çoğu £16,000 - £29,500 arasında)
- **Web Sitesi**: Doğrudan üniversite programa bağlantısı
- **Lokasyon**: GPS koordinatları ile haritada tam konumu

### 🔧 Geliştirme

Haritayı geliştirmek ve yeni özellikler eklemek isterseniz:

1. Dosyaları yerel olarak düzenleyin
2. `data.json`'a yeni üniversiteler ekleyin
3. `script.js` ve `style.css`'i özelleştirin
4. Değişiklikleri GitHub'a push edin

### 📝 Veri Ekleme

Yeni bir üniversite eklemek için `data.json`'a aşağıdaki format ile giriş ekleyin:

```json
{
    "name": "University Name",
    "lat": 51.5074,
    "lon": -0.1278,
    "city": "London",
    "website": "https://example.com/llm",
    "law_masters_summary": "Program description in Turkish",
    "logo_url": "images/university_name.png"
}
```

### 📄 Lisans

Bu proje MIT Lisansı altında yayımlanmaktadır. Ayrıntılar için `LICENSE` dosyasına bakın.

### 👤 Katkıda Bulunun

Eksik üniversiteleri veya hatalı bilgileri bildirmek için bir Issue açın veya Pull Request gönderin.

### 🌐 Bağlantılar

- **Leaflet.js**: https://leafletjs.com/
- **OpenStreetMap**: https://www.openstreetmap.org/
- **GitHub Pages**: https://pages.github.com/

---

**Sürüm**: 1.0.0  
**Son Güncelleme**: Kasım 2025
