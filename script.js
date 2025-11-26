// Marker'ları harita üzerinde takip etmek ve boyutlarını güncelleyebilmek için bir dizi oluşturun.
var allMarkers = [];
var universitiesData = []; // Ham veri, arama için kullanılır

// Harita Başlangıcı (Aynı Kalır)
var map = L.map('map').setView([54.00, -2.50], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// --------------------------------------------------------------------------
// MARKER BOYUTUNU GÜNCELLEYEN FONKSİYON (GÜNCELLENDİ)
// --------------------------------------------------------------------------
function updateMarkerSize() {
    var currentZoom = map.getZoom();
    
    // Zoom seviyesine göre ölçeklendirme aralığını ve faktörlerini tanımlayın
    var minZoom = 6;
    var maxZoom = 20;
    var minScale = 1.0; 
    var maxScale = 1.8;

    // Ölçek faktörünü hesaplama
    var scale = minScale + (currentZoom - minZoom) * (maxScale - minScale) / (maxZoom - minScale);
    
    // Ölçeğin belirlenen minimum ve maksimum değerler arasında kalmasını sağlama
    if (scale < minScale) {
        scale = minScale;
    } else if (scale > maxScale) {
        scale = maxScale;
    }

    // Haritadaki her marker'ın boyutunu güncelleme
    // ÖNEMLİ: Leaflet DOM konumlandırmasını (translate) bozmamak için
    // transform'u doğrudan marker elementine yazmayacağız.
    // Bunun yerine marker içindeki .uni-logo-container elemanını ölçekleyeceğiz.
    allMarkers.forEach(marker => {
        var iconElement = marker.getElement();
        if (!iconElement) return;

        // İç logo konteynerini seç (marker HTML'inde oluşturulmuş olmalı)
        var inner = iconElement.querySelector('.uni-logo-container');
        if (inner) {
            // transform-origin olarak alt ortayı kullan, böylece pin alt noktası sabit kalır
            inner.style.transformOrigin = 'center bottom';

            // CSS'te varsayılan translateX(-50%) varsa onu korumak için
            // inline transform'a translateX(-50%) ekleyip scale uygularız.
            inner.style.transform = `translateX(-50%) scale(${scale})`;
        }
    });
}
// --------------------------------------------------------------------------


// 2. Verileri Yükleme ve Marker Ekleme
fetch('data.json')
    .then(response => response.json())
    .then(universities => {
        // Kaydet (arama için)
        universitiesData = universities;
        universities.forEach(uni => {
            
            // CSS'e dayanarak özel HTML yapısını oluşturma (Aynı Kalır)
            var customIconHtml = `
                <div class="uni-logo-container">
                    <img src="${uni.logo_url}" alt="${uni.name} Logo">
                </div>
            `;
            
            // L.divIcon kullanarak bu HTML yapısını marker olarak kullanma (Aynı Kalır)
            const iconWidth = 38;
            const iconHeight = 48;

            var customIcon = L.divIcon({
                html: customIconHtml, 
                className: 'uni-custom-pin', 
                iconSize: [iconWidth, iconHeight],
                iconAnchor: [iconWidth / 2, iconHeight] 
            });
            
            // Marker oluşturma
            var marker = L.marker([uni.lat, uni.lon], {icon: customIcon}).addTo(map);

            // marker ile üniversite verisini ilişkilendir
            marker.uni = uni;

            // Marker'ı dizimize ekliyoruz:
            allMarkers.push(marker); 

            // Pop-up içeriği (Aynı Kalır)
            var popupContent = `
                <div style="max-width: 300px;">
                    <b>${uni.name}</b><br>
                    Şehir: ${uni.city}<br>
                    <hr style="margin: 5px 0;">

                    <p style="font-weight: bold; margin-bottom: 3px;">Hukuk Yüksek Lisansı (LL.M.) Özeti:</p>
                    <p style="font-size: 0.9em; margin-top: 0;">${uni.law_masters_summary}</p>
                    
                    <a href="${uni.website}" target="_blank">Üniversite Web Sitesi</a>
                </div>
            `;
            
            // Marker'a pop-up ekleme
            marker.bindPopup(popupContent);
        });
        
        // Veriler yüklendikten sonra ilk kez boyutu ayarla
        // Bunu bir sonraki event loop'unda çalıştırmak, Leaflet'in kendi transform değerini 
        // ayarlaması için zaman tanır. Bu, konum kaymalarını çözebilir.
        setTimeout(updateMarkerSize, 10); 
    })
    .catch(error => console.error('Üniversite verileri yüklenirken hata oluştu:', error));

// Harita zoom seviyesi değiştiğinde fonksiyonu çalıştır
map.on('zoomend', updateMarkerSize);