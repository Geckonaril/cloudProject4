# AWS Auto Scaling Destekli E-Ticaret Backend Platformu (Proje 4)

Bu proje, bulut bilişim dersi kapsamında yüksek erişilebilirlik (High Availability) ve otomatik ölçeklenebilirlik (Auto Scaling) ilkelerini uygulamalı olarak göstermek amacıyla AWS altyapısı üzerinde geliştirilmiştir.

## 🏗️ Sistem Mimarisi

Sistem, internetten gelen yoğun trafiği karşılamak ve sunucu kaynaklarını optimize etmek amacıyla AWS'nin "Kutsal Üçlüsü" olarak adlandırılan mimari üzerine kurulmuştur:

1. **Application Load Balancer (ALB):** Gelen HTTP (Port 80) isteklerini karşılayan ve arkadaki aktif sunuculara (Target Group) trafiği eşit olarak dağıtan katmandır.
2. **Auto Scaling Group (ASG):** Sunucuların anlık CPU yükünü izleyen ve yük durumuna göre dinamik olarak sunucu sayısını artıran/azaltan yönetim mekanizmasıdır.
3. **Amazon Machine Image (AMI):** Node.js ve gerekli e-ticaret backend bağımlılıklarının önceden kurulu olduğu sunucu kalıbıdır.

## 🛠️ Kullanılan Teknolojiler

- **Backend:** Node.js, Express.js
- **Bulut Platformu:** AWS (EC2, Auto Scaling, Application Load Balancer, Target Groups, Launch Templates)
- **Versiyon Kontrol:** Git & GitHub

## 🚨 Ölçeklendirme Politikası ve Stres Testi

Sistemde sunucuların ortalama CPU kullanımı **%50** eşiğini aştığı anda Auto Scaling mekanizması tetiklenecek şekilde yapılandırılmıştır. Uygulama içerisine gömülen `/stress` endpoint'i yardımıyla kasıtlı olarak CPU yükü %100'e zorlanabilmekte ve AWS'nin yeni sunucuları dinamik olarak ayağa kaldırma anı gerçek zamanlı olarak gözlemlenebilmektedir.

- **Minimum Sunucu Kapasitesi:** 1
- **Maksimum Sunucu Kapasitesi:** 3
- **Tetikleme Eşiği:** %50 Ortalama CPU