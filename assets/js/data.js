if (localStorage.getItem('urunler') === null) {
    const varsayilanUrunler = [
        {
            id: 1,
            ad: "MSI Titan GT77 Oyun Bilgisayarı",
            kategori: "Laptop",
            fiyat: "85.000 TL",
            resim: "assets/images/msititan.png, assets/images/titan2.png, assets/images/titan3.png",
            aciklama: `
                <b>Üst Düzey Performans:</b> <br>
                En yeni nesil işlemci ve ekran kartı ile oyunlarda sınırları zorlayın.<br><br>
                <b>Teknik Özellikler:</b><br>
                • <b>İşlemci:</b> Intel Core i9-13980HX<br>
                • <b>Ekran Kartı:</b> NVIDIA GeForce RTX 4090 16GB<br>
                • <b>RAM:</b> 64GB DDR5 4800MHz<br>
                • <b>Depolama:</b> 2TB NVMe SSD<br>
                • <b>Ekran:</b> 17.3 inç 4K 144Hz Mini-LED<br>
                • <b>Ağırlık:</b> 3.3 kg
            `
        },
        {
            id: 2,
            ad: "Logitech G Pro X Superlight",
            kategori: "Ekipman",
            fiyat: "3.500 TL",
            resim: "assets/images/logimaus1.png, assets/images/logimaus2.png",
            aciklama: `
                <b>Dünyanın En Hafifi:</b> <br>
                Sadece 63 gram ağırlığı ile profesyonel e-spor oyuncularının tercihi.<br><br>
                <b>Teknik Özellikler:</b><br>
                • <b>Sensör:</b> HERO 25K<br>
                • <b>DPI:</b> 100 - 25.600<br>
                • <b>Bağlantı:</b> LIGHTSPEED Kablosuz<br>
                • <b>Pil Ömrü:</b> 70 Saat<br>
                • <b>Tuş Sayısı:</b> 5 Programlanabilir Tuş
            `
        },
        {
            id: 3,
            ad: "HyperX Cloud II Wireless",
            kategori: "Ekipman",
            fiyat: "4.200 TL",
            resim: "assets/images/hyperxcloud2.png",
            aciklama: `
                <b>Efsanevi Konfor:</b> <br>
                Hafızalı köpük yastıkları ve dayanıklı alüminyum kasası ile uzun oyun maratonları için tasarlandı.<br><br>
                <b>Teknik Özellikler:</b><br>
                • <b>Ses:</b> 7.1 Sanal Surround<br>
                • <b>Sürücüler:</b> 53mm Neodim<br>
                • <b>Mikrofon:</b> Çıkarılabilir, Gürültü Engelleyici<br>
                • <b>Bağlantı:</b> 2.4GHz Kablosuz (30 metre menzil)<br>
                • <b>Pil Ömrü:</b> 30 Saat
            `
        },
        {
            id: 4,
            ad: "Asus ROG Swift 360Hz Monitör",
            kategori: "Monitör",
            fiyat: "22.000 TL",
            resim: "assets/images/asusmonit1.png, assets/images/asusmonit2.png, assets/images/asusmonit3.png",
            aciklama: `
                <b>Hızın Tanımı:</b> <br>
                Dünyanın en hızlı yenileme hızına sahip monitörü ile rakiplerinizden önce görün.<br><br>
                <b>Teknik Özellikler:</b><br>
                • <b>Boyut:</b> 24.5 inç<br>
                • <b>Panel:</b> Fast IPS<br>
                • <b>Çözünürlük:</b> 1920x1080 (FHD)<br>
                • <b>Yenileme Hızı:</b> 360Hz<br>
                • <b>Tepki Süresi:</b> 1ms (GTG)<br>
                • <b>Teknoloji:</b> NVIDIA G-SYNC
            `
        },
        {
            id: 5,
            ad: "Razer BlackWidow V4 Pro",
            kategori: "Ekipman",
            fiyat: "6.800 TL",
            resim: "assets/images/razer1.png, assets/images/razer2.png, assets/images/razer3.png",
            aciklama: `
                <b>Tam Kontrol:</b> <br>
                Mekanik hissi ve RGB şölenini masanıza taşıyın.<br><br>
                <b>Teknik Özellikler:</b><br>
                • <b>Switch:</b> Razer Green (Clicky) veya Yellow (Linear)<br>
                • <b>Aydınlatma:</b> Razer Chroma RGB<br>
                • <b>Multimedya:</b> Özel Medya Tekerleği<br>
                • <b>Bilek Desteği:</b> Manyetik, Yumuşak Deri<br>
                • <b>Kasa:</b> Alüminyum Üst Plaka
            `
        },
        {
            id: 6,
            ad: "PlayStation 5",
            kategori: "Konsol",
            fiyat: "19.500 TL",
            resim: "assets/images/ps5slim.png, assets/images/ps5.2.png, assets/images/ps5.3.png",
            aciklama: `
                <b>Sadece oyun için üretildi. Konfor ve performansın zirvesi. :</b> <br>
                Ultra yüksek hızlı SSD ile yıldırım hızında yükleme süreleri.<br><br>
                <b>Teknik Özellikler:</b><br>
                • <b>Depolama:</b> 1TB Özel SSD<br>
                • <b>Çözünürlük:</b> 4K 120Hz Desteği<br>
                • <b>Ses:</b> Tempest 3D AudioTech<br>
                • <b>Kutu İçeriği:</b> DualSense Kol, HDMI 2.1 Kablo<br>
                • <b>Sürüm:</b> Dijital (Disk Sürücüsüz)
                
            `
        },
        {
            id: 7,
            ad: "ASUS Tuf A15",
            kategori: "Laptop",
            fiyat: "55.000 TL",
            resim: "assets/images/asustuf1.png, assets/images/asustuf2.png, assets/images/asustuf3.png",
            aciklama: `
                <b>Uygun fiyata piyasadaki her oyunu oyna!:</b> <br>
                <br>
                <b>Teknik Özellikler:</b><br>
                • <b>İşlemci:</b> AMD Ryzen 7<br>
                • <b>Ekran Kartı:</b> NVIDIA GeForce RTX 4060 8GB<br>
                • <b>RAM:</b> 16 GB DDR5 4800MHz<br>
                • <b>Depolama:</b> 512GB NVMe SSD<br>
                • <b>Ekran:</b> 17.3 inç 1080p 144Hz Mini-LED<br>
                • <b>Ağırlık:</b> 3.8 kg
            `
        },
        {
            id: 8,
            ad: "MSI MPG INFINITE X3",
            kategori: "Masaüstü",
            fiyat: "200.000 TL",
            resim: "assets/images/msimasa1.png, assets/images/msimasa2.png, assets/images/msimasa3.png",
            aciklama: `
                <b>Bir oyun makinesinden çok daha fazlası; tam anlamıyla bir canavar!:</b> <br>
                <br>
                <b>Teknik Özellikler:</b><br>
                • <b>İşlemci:</b> AMD Ryzen 9<br>
                • <b>Ekran Kartı:</b> NVIDIA GeForce RTX 5080 16GB<br>
                • <b>RAM:</b> 64 GB DDR5 4800MHz<br>
                • <b>Depolama:</b> 2TB NVMe SSD<br>
                • <b>Ağırlık:</b> 10 kg
            `
        },
        {
            id: 9,
            ad: "MSİ MPG 312URX 240Hz Monitör",
            kategori: "Monitör",
            fiyat: "63.000 TL",
            resim: "assets/images/msimonit1.png, assets/images/msimonit2.png, assets/images/msimonit3.png",
            aciklama: `
                <b>Hızın Tanımı:</b> <br>
                Renkler daha önce hiç bu kadar canlı olmamıştı...<br><br>
                <b>Teknik Özellikler:</b><br>
                • <b>Boyut:</b> 31.5 inç<br>
                • <b>Panel:</b> Fast IPS<br>
                • <b>Çözünürlük:</b> 4K UHD 2160p<br>
                • <b>Yenileme Hızı:</b> 240Hz<br>
                • <b>Tepki Süresi:</b> 1ms (GTG)<br>
                • <b>Teknoloji:</b> NVIDIA G-SYNC
            `
        }
    ];
    localStorage.setItem('urunler', JSON.stringify(varsayilanUrunler));
}

if (localStorage.getItem('duyurular') === null) {
    const varsayilanDuyurular = [
        {
            id: 1,
            baslik: "Büyük Yaz İndirimi Başladı!",
            ozet: "Tüm laptoplarda %20 indirim fırsatını kaçırmayın.",
            icerik: "Yaz sezonu boyunca seçili MSI ve Asus modellerinde geçerli %20 indirim mağazalarımızda ve web sitemizde...",
            tarih: "06.05.2025"
        },
        {
            id: 2,
            baslik: "Mağazamız Yenilendi",
            ozet: "Mersin şubemiz yeni yüzüyle hizmetinizde.",
            icerik: "Daha geniş ürün yelpazesi ve deneyim alanlarıyla Mersin Yenişehir şubemiz açıldı.",
            tarih: "10.06.2025"
        },
        {
            id: 3,
            baslik: "Yeni Ürünler!!!",
            ozet: "Oyun Dünyasının İki Devi: MSI Katana ve ASUS TUF Stoklarda!",
            icerik: "Bekleyiş sona erdi! Keskin performansı ve şık tasarımıyla MSI Katana ve askeri sınıf dayanıklılığıyla tanınan ASUS TUF Gaming serisi dizüstü bilgisayarlar şimdi Mismo Teknoloji'de. Sınırları zorlayan bu gücü hemen keşfedin ve oyunun hakimi olun.",
            tarih: "23.07.2025"
        },
        {
            id: 4,
            baslik: "Hızlı Teslimat!",
            ozet: "Saat 16:00'ya Kadar Sipariş Ver, Aynı Gün Kargoda!",
            icerik: "Heyecanınızı bekletmiyoruz. Hafta içi saat 16:00'ya kadar verdiğiniz tüm siparişleri aynı gün özenle paketleyip kargoya teslim ediyoruz. Oyun keyfine en kısa sürede başlayın.",
            tarih: "13.08.2025"
        },
        {
            id: 5,
            baslik: "Garanti Fırsatı",
            ozet: "2 Yıl Resmi Distribütör Garantisi",
            icerik: "Mismo Teknoloji'den aldığınız tüm MSI ve ASUS ürünleri, %100 orijinal olup 2 yıl boyunca resmi Türkiye distribütör garantisi altındadır. Satış sonrasında da içiniz rahat olsun, güvencemiz sizinle.",
            tarih: "30.09.2025"
        }
    ];
    localStorage.setItem('duyurular', JSON.stringify(varsayilanDuyurular));
}