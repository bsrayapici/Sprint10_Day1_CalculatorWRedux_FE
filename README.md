# Sprint10_Day1_CalculatorWRedux_FE


[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/bsrayapici/Sprint10_Day1_CalculatorWRedux_FE)

Gün Projesi: Basit Hesap Makinası
100%
Geçen hafta yaptığın GridGame beğenildi. Yarıda kalmış bir uygulamayı tamamlaman istendi.

UI tarafı ve bazı kodlar hazır. Kodda eksik parçaları ekleyerek başlayacak UI, reducer ve action dosyalarında sıfırdan özellikler oluşturarak projeyi tamamlayacaksın.

Bu basitleştirilmiş hesap makinesi bir prototip, sayının sonuna basamak eklemek yerine seçilen sayının tamamını ekler. İşlem sonunda hesap makinesi aşağıdaki gibi çalışmalı.

Yapılacak 6 görev aşağıda tanımlandı.

1. Reducer'ı bağlayın
[ ] Uygulama klasöründe gezin ve özellikle "App.jsx", "/store/reducers.jsx" ve "/store/actions.jsx" dosyalarına bakın.
[ ] TotalDisplay bileşeni bir değer alır ve bu değeri stillenmiş bir textarea'da gösterir. BU BİLEŞENİ DEĞİŞTİRMENE GEREK YOK.
[ ] CalcButton bileşeni bir onClick metodu ve bir değer alır, bu değeri görüntüler ve onClick metodunu ui butonuna ekler. BU BİLEŞENİ DEĞİŞTİRMENE GEREK YOK.
[ ] App.jsx içine, useReducer hookunu import edin, ./store/reducers.jsxdan reducerı ve initialState'i kullanarak tanımlayın.
2. State'i UI'de görüntüleyin.
[ ] Operation elemanı içindeki "X" i state.operation ı referans alarak değiştirin.
[ ] Memory elemanı içindeki "0" ı state.memory yi referans alarak değiştirin.
[ ] TotalDisplay bileşenine değer atarken "0" ı state.total ı referans alarak değiştirin.
[ ] UI'de initialState'teki değerlerle total, operation ve memory'yi kontrol edin (100, * ve sırasıyla 100)
[ ] Reducer'daki initialState değerini aşağıdaki ile değiştirerek elde ettiğiniz state'i gerçek durumuna getirerek test edin:
export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}
3. Butonlara Action bağlayın.
[ ] APPLY_NUMBER actionını (./store/reducers.jsx içindeki) ve applyNumber action creatorı (./store/actions.jsx içindeki) alalım. Bu action, action creatora iletilen bir sayıyı ekler, çarpar veya çıkarır.
[ ] applyNumber action creatorını App.jsx içine import edin
[ ] Argüman olarak bir sayı alan ve applyNumberı ekleyen bir event handler oluşturun.
[ ] Bu eventhandlerı 1 butonunun onClick'ine argümanına 1 vererek aktarın. (click handlera bir fonksiyon aktarıyoruz, fonksiyonu çalıştırmıyoruz!)
[ ] 1 butonuna basıldığında totale 1 ekleyip ekrana yazdırıp yazdırmadığını test edin.
[ ] Yeni event handlerınızı gerekli değerleri vererek tek tek diğer butonlara da bağlayın.
[ ] Tüm butonlara tek tek tıklandığında totale doğru değerleri ekleyip eklemediğini test edin.
4. Bir action creator oluşturun ve bağlayın.
[ ] CHANGE_OPERATION actionı (/store/reducers.jsx içinde) alın. Bu reducer operatör değeri alır (+,- ve *) ve bunu state'e aktarır.
[ ] Argümanı olarak bir operatör alan bir action creator oluşturun (store/actions.jsx içinde) ve CHANGE_OPERATION tipinde bir action constant oluşturun.
[ ] Yeni action creatorı App.jsxe import edin
[ ] +, - ve * butonlarına tıklandığında, ilgili operatörü acton creatorınıza ekleyen bir event handler oluşturun. Her buton için doğru operatörü gönderdiğinizden emin olun.
[ ] Operatör butonlarının doğru şekilde çalıştığından ve sayıları doğru işleme tabi tuttuğundan emin olmak için test yapın.
5. Ekranı sıfırlamak için bir reducer ve action creator tanımlayın ve bağlayın.
[ ] /store/reducers.jsx içinde, CLEAR_DISPLAY casei oluşturun. Bu case total değer statini 0 yapacak.
[ ] /store/actions.jsx içine, action creator ve CLEAR_DISPLAY action constantı oluşturun. (Reducer dosyanızda bu sabiti import ettiğinizden emin olun.)
[ ] App.jsx içinde clearDisplay action creatorı import edin.
[ ] "CE" buttona clearDisplay action creatorınızı ekleyen event handlerınızı oluşturun ve bağlayın.
[ ] clearDisplay butonunuzun düzgün çalışıp çalışmadığını test edin.
6. = için de bir reducer ve action creator tanımlayın ve bağlayın.
[ ] 5. adımda yaptığınız "CE" actionı için yaptıklarınızın aynısını = için yapın.
[ ] = butonunuzun düzgün çalışıp çalışmadığını test edin.
7. Memory fonksiyonları ekleyin.
[ ] M+ a tıklandığında, şu anki memory değerine şu anki total değerini kaydetmeli.
[ ] MR a tıklandığında, şu an memorydeki değer şu anki total değerine aktarılmalı (APPLY_NUMBER case ine göz atabilirsin).
[ ] MC e tıklandığında, şu anki memory değeri sıfırlanmalı.
Çalışma dosyaları: src/store/actions.jsx, src/store/reducers.jsx, src/App.jsx