(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	})

	var width = $(window).width();
		$(window).resize(function() {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})

	const elem = document.querySelector('.trending-box');
	const filtersElem = document.querySelector('.trending-filter');
	if (elem) {
		const rdn_events_list = new Isotope(elem, {
			itemSelector: '.trending-items',
			layoutMode: 'masonry'
		});
		if (filtersElem) {
			filtersElem.addEventListener('click', function(event) {
				if (!matchesSelector(event.target, 'a')) {
					return;
				}
				const filterValue = event.target.getAttribute('data-filter');
				rdn_events_list.arrange({
					filter: filterValue
				});
				filtersElem.querySelector('.is_active').classList.remove('is_active');
				event.target.classList.add('is_active');
				event.preventDefault();
			});
		}
	}


	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});
    


})(window.jQuery);
/* =========================================
   SAYFA GEÇİŞLERİ (GİRİŞ VE ÇIKIŞ)
   ========================================= */

// Sayfa Yüklendiğinde (GİRİŞ EFEKTİ)
window.addEventListener('load', function() {
    // Küçük bir gecikme ile body'e 'loaded' sınıfı ekle
    // Bu sayede opacity: 0 -> opacity: 1'e dönüşür (Fade In)
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);
});


// Linke Tıklandığında (ÇIKIŞ EFEKTİ)
$(document).ready(function() {
    $('a:not([href^="#"]):not([target="_blank"]):not([href^="javascript"])').on('click', function(e) {
        var linkAdresi = $(this).attr('href');

        if (linkAdresi && linkAdresi !== '') {
            e.preventDefault(); 

            // Body'den 'loaded' sınıfını kaldır (Tekrar opacity: 0 olur -> Fade Out)
            $('body').removeClass('loaded');

            // 500ms bekle ve sayfayı değiştir
            setTimeout(function() {
                window.location.href = linkAdresi;
            }, 500);
        }
    });
});
/* =========================================
   SEPET SİSTEMİ (LOCALSTORAGE)
   ========================================= */

// Sayfa yüklendiğinde sepet sayısını güncelle
$(document).ready(function() {
    sepetSayisiniGuncelle();
});

// 1. Sepete Ürün Ekleme Fonksiyonu
function sepeteEkle(urunId) {
    // Veritabanından ürünü bul
    let urunler = JSON.parse(localStorage.getItem('urunler'));
    let eklenecekUrun = urunler.find(u => u.id == urunId);

    if (eklenecekUrun) {
        // Mevcut sepeti çek veya boş dizi oluştur
        let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
        
        // Ürünü sepete at
        sepet.push(eklenecekUrun);
        
        // Güncel sepeti kaydet
        localStorage.setItem('sepet', JSON.stringify(sepet));
        
        // Kullanıcıya bilgi ver
        alert(eklenecekUrun.ad + " sepete eklendi!");
        
        // Sayacı güncelle
        sepetSayisiniGuncelle();
    }
}

// 2. Sepeti Açma ve Listeleme
function sepetiAc() {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    let liste = document.getElementById('sepetListesi');
    let bosUyari = document.getElementById('sepetBosUyari');
    let ozetAlan = document.getElementById('sepetOzet');
    
    liste.innerHTML = "";
    let toplamTutar = 0;

    if (sepet.length === 0) {
        bosUyari.style.display = 'block';
        liste.style.display = 'none';
        ozetAlan.style.display = 'none';
    } else {
        bosUyari.style.display = 'none';
        liste.style.display = 'block';
        ozetAlan.style.display = 'block';

        sepet.forEach((urun, index) => {
            // Fiyatı sayıya çevir (Örn: "85.000 TL" -> 85000)
            let fiyatSayi = parseInt(urun.fiyat.replace(/[^0-9]/g, ''));
            toplamTutar += fiyatSayi;
            
            // Resimlerin ilki
            let resim = urun.resim.split(',')[0];

            let satir = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img src="${resim}" style="width: 50px; height: 50px; object-fit: contain; margin-right: 10px;">
                        <div>
                            <h6 class="my-0">${urun.ad}</h6>
                            <small class="text-muted">${urun.fiyat}</small>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="sepettenCikar(${index})">X</button>
                </li>
            `;
            liste.innerHTML += satir;
        });

        // Toplamı yazdır
        document.getElementById('sepetToplam').innerText = toplamTutar.toLocaleString('tr-TR') + " TL";
    }

    // Modalı aç (jQuery ile)
    $('#sepetModal').modal('show');
}

// 3. Sepetten Ürün Çıkarma
function sepettenCikar(index) {
    let sepet = JSON.parse(localStorage.getItem('sepet'));
    sepet.splice(index, 1); // İlgili sıradaki ürünü sil
    localStorage.setItem('sepet', JSON.stringify(sepet));
    
    // Listeyi yenile (Modalı kapatmadan tekrar çiz)
    sepetiAc(); 
    sepetSayisiniGuncelle();
}

// 4. Sepet Sayısını Menüde Gösterme
function sepetSayisiniGuncelle() {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    let sayac = document.getElementById('sepetSayisi');
    if(sayac) {
        sayac.innerText = sepet.length;
    }
}

// 5. Satın Al (Simülasyon)
function satinAl() {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    if(sepet.length === 0) return;

    if(confirm("Siparişi onaylıyor musunuz?")) {
        alert("Siparişiniz alındı! Teşekkür ederiz.");
        localStorage.removeItem('sepet'); // Sepeti temizle
        window.location.href = 'index.html'; // Ana sayfaya dön
    }
}