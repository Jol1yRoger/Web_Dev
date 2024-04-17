import { Component , OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})


export class AlbumsComponent {


  products = [
    {
      name: 'Iphone 15',
      description: 'Pdfviunervsdf',
      category: 'Phones', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h85/ha9/84533852733470.jpg?format=gallery-medium',
      price: 10.99,
      link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-dual-sim-belyi-114725347/?c=750000000"
    },
    {
      name: 'Iphone 14',
      description: 'sfdversvwr',
      category: 'Phones', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h2e/63792887529502.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-fioletovyi-107116491/?c=750000000"
    },
    {
      name: 'Galaxy Z',
      description: 'sfvsfdverwvsevsdff',
      category: 'Phones', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h88/84934045401118.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/samsung-galaxy-z-fold5-5g-12-gb-512-gb-goluboi-podarok-115938944/?c=750000000"
    },
    {
      name: 'Galaxy Fold',
      description: 'sfvsfdverwvsevsdff',
      category: 'Phones', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h30/63823902212126.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/samsung-galaxy-fold-12-gb-512-gb-serebristyi-100015658/?c=750000000"
    },
    {
      name: 'Galaxy S24',
      description: 'sfvsfdverwvsevsdff',
      category: 'Phones', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h4a/85135958540318.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-ds-12-gb-512-gb-fioletovyi-116534765/?c=750000000"
    },
    {
      name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'TV', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000"
    },
    {
      name: 'Телевизор LG 43UP76006LC 109 см черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'TV', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h73/64332873957406.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/lg-43up76006lc-109-sm-chernyi-101585668/?c=750000000"
    },
    {
      name: 'Телевизор Yasin 43G11 109 см черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'TV', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/had/h96/68005513363486.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000"
    },
    {
      name: 'Телевизор Leadbros S01M04D17SMART32 черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'TV', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/h85/80366137278494.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/leadbros-s01m04d17smart32-chernyi-109893243/?c=750000000"
    },
    {
      name: 'Телевизор LG 43UP77006LB 109 см черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'TV', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h31/64341708341278.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/lg-43up77006lb-109-sm-chernyi-101590304/?c=750000000"
    },
    {
      name: 'Кровать Mod Beds Вертикаль, 180x200 см, без подъёмного механизма, серый',
      description: 'sfvsfdverwvsevsdff',
      category: 'Beds', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/hd2/64426872963102.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/mod-beds-vertikal-180x200-sm-bez-pod-jomnogo-mehanizma-seryi-106051867/?c=750000000"
    },
    {
      name: 'Кровать NZ Group Мишель 200 односпальная, 90x200 см, подъёмный механизм, серый',
      description: 'sfvsfdverwvsevsdff',
      category: 'Beds', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/had/ha1/64923652522014.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/nz-group-mishel-200-odnospal-naja-90x200-sm-pod-jomnyi-mehanizm-seryi-107284837/?c=750000000"
    },
    {
      name: 'Кровать Алинур Марта двуспальная, 160x200 см, без подъёмного механизма, бежевый',
      description: 'sfvsfdverwvsevsdff',
      category: 'Beds', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h44/64078671151134.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/alinur-marta-dvuspal-naja-160x200-sm-bez-pod-jomnogo-mehanizma-bezhevyi-101563507/?c=750000000"
    },
    {
      name: 'Кровать Алинур Марта, 180x200 см, бежевый',
      description: 'sfvsfdverwvsevsdff',
      category: 'Beds', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/63939707961374.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/alinur-marta-180x200-sm-bezhevyi-101658023/?c=750000000"
    },
    {
      name: 'Кровать NZGroup Мишель 178 односпальная, 90x200 см, без подъёмного механизма, белый, серый',
      description: 'sfvsfdverwvsevsdff',
      category: 'Beds', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h67/hcf/64374248079390.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/nzgroup-mishel-178-odnospal-naja-90x200-sm-bez-pod-jomnogo-mehanizma-belyi-seryi-104403805/?c=750000000"
    },
    {
      name: 'Мышь LS Pro черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'Mouses', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h61/82393746636830.png?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000"
    },
    {
      name: 'Мышь Logitech G102 Lightsync черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'Mouses', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000"
    },
    {
      name: 'Мышь X-Game XM-770OUB черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'Mouses', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h5b/63789012811806.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/x-game-xm-770oub-chernyi-9101354/?c=750000000"
    },
    {
      name: 'Мышь X-Game XM-775OGB черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'Mouses', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h18/63909776424990.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/x-game-xm-775ogb-chernyi-100374644/?c=750000000"
    },
    {
      name: 'Мышь Xiaomi Mi Dual Mode Wireless Mouse Silent Edition черный',
      description: 'sfvsfdverwvsevsdff',
      category: 'Mouses', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h29/hcc/64010597302302.jpg?format=gallery-medium',
      price: 19.99, link: "https://kaspi.kz/shop/p/xiaomi-mi-dual-mode-wireless-mouse-silent-edition-chernyi-101193311/?c=750000000"
    },
    
  ];
}



// import { Component, OnInit } from '@angular/core';
// import { ConfigService } from '../albums.service';
// @Component({
//   selector: 'app-albums',
//   templateUrl: './albums.component.html',
//   styleUrls: ['./albums.component.css']
// })
// export class AlbumsComponent implements OnInit {
//   data?: any[];

//   constructor(private myService: ConfigService) { }
//   ngOnInit() {
//     this.myService.getData().subscribe((data) => {
//       this.data = data;
//     });
//   }
//   delete(a?: object){
//     var filtered = this.data?.filter(function(ele){
//       return ele != a;
//     })
//     this.data = filtered;
//   }


// }
