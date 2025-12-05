import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-soluciones',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './soluciones.component.html',
    styleUrls: ['./soluciones.component.css']
})
export class SolucionesComponent implements OnInit {
    showBubble = true;
    showPricing = false; // Add state for pricing visibility
    faqOpen = [false, false, false, false];
    phoneNumber = '543884472423';

    faqs = [

        { q: "¿Dónde está ubicada la agencia?", a: "Nuestra base operativa está en Palpalá, Jujuy. Brindamos atención presencial en toda la provincia y soporte remoto global." },
        { q: "¿Qué incluye el sistema SUDO ERP?", a: "SUDO es un ecosistema completo: Control de Stock, Facturación AFIP, Punto de Venta (POS), App Móvil y Reportes Financieros en tiempo real." },
        { q: "¿Hacen Factura A?", a: "Sí, somos una agencia registrada. Emitimos Factura A y B. Todos nuestros desarrollos cuentan con garantía oficial por contrato." },
        { q: "¿Cuáles son los medios de pago?", a: "Aceptamos Transferencia, Cheques, MercadoPago y Tarjetas de Crédito. Ofrecemos financiación propia en planes seleccionados." }
    ];

    constructor(@Inject(DOCUMENT) private document: Document) { }

    ngOnInit() {
        this.document.title = 'Agencia de Software en Jujuy | Gabriel Iturre';
        this.injectSchema();
    }

    toggleFaq(index: number) { this.faqOpen[index] = !this.faqOpen[index]; }
    toggleBubble() { this.showBubble = !this.showBubble; }

    revealPricing() {
        this.showPricing = true;
        setTimeout(() => {
            this.scrollTo('planes');
        }, 100);
    }

    scrollTo(id: string) { this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

    openWhatsApp() {
        window.open(`https://wa.me/${this.phoneNumber}?text=Hola%20Gabriel,%20vi%20tu%20web%20y%20me%20interesa%20un%20servicio.`, '_blank');
    }

    private injectSchema() {
        const script = this.document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Gabriel Iturre - Agencia de Software",
            "description": "Desarrollo de Software, Sistemas ERP y Aplicaciones Móviles en Palpalá y Jujuy.",
            "image": "https://gabrieliture.dev/assets/sudo-dashboard.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Palpalá",
                "addressRegion": "Jujuy",
                "addressCountry": "AR"
            },
            "url": "https://gabrieliture.dev/soluciones",
            "telephone": "+543884472423",
            "priceRange": "$$$"
        });
        this.document.head.appendChild(script);
    }
}
