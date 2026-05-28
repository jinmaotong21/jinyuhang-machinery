// ============================================
// 多语言翻译数据
// ============================================

const translations = {
    zh: {
        // 导航栏
        nav_home: "首页",
        nav_products: "产品",
        nav_about: "关于我们",
        nav_contact: "联系我们",
        
        // 英雄区域
        hero_title: "专业工程机械解决方案",
        hero_subtitle: "为您提供高质量的工程机械设备和专业服务",
        hero_button: "浏览产品",
        
        // 产品部分
        products_title: "主要产品",
        products_subtitle: "我们提供一系列高性能的工程机械设备",
        
        // 产品卡片
        excavator_name: "小型挖掘机",
        excavator_desc: "高效能小型挖掘机，适用于各种建筑工程和土方工作",
        excavator_feature1: "✓ 强大的挖掘力",
        excavator_feature2: "✓ 精准操控",
        excavator_feature3: "✓ 低油耗",
        excavator_feature4: "✓ 易于维护",
        
        loader_name: "滑移装载机",
        loader_desc: "多功能滑移装载机，灵活应对各种建筑工地需求",
        loader_feature1: "✓ 灵活转向",
        loader_feature2: "✓ 多种配件",
        loader_feature3: "✓ 高效装卸",
        loader_feature4: "✓ 可靠性强",
        
        container_name: "折叠集装箱房",
        container_desc: "便携式折叠集装箱房，快速搭建临时建筑",
        container_feature1: "✓ 快速部署",
        container_feature2: "✓ 可重复使用",
        container_feature3: "✓ 结构牢固",
        container_feature4: "✓ 成本低廉",
        
        detail_link: "查看详情",
        
        // 关于我们
        about_title: "关于山东金裕航机械",
        about_text1: "山东金裕航机械有限公司是一家专业从事工程机械设备销售和服务的企业。我们致力于为客户提供高质量、高效能的工程机械解决方案。",
        about_text2: "多年来，我们积累了丰富的行业经验，建立了完善的销售和售后服务网络，赢得了广大客户的信任和支持。",
        
        stat_experience: "年行业经验",
        stat_customers: "满意客户",
        stat_sales: "设备销售",
        
        // 优势
        advantages_title: "我们的优势",
        advantage_quality: "品质保证",
        advantage_quality_desc: "选用优质零部件，确保产品性能稳定可靠",
        advantage_service: "专业服务",
        advantage_service_desc: "24小时客户服务，解决您的各类需求",
        advantage_support: "技术支持",
        advantage_support_desc: "专业技术团队，提供完整的售后支持",
        advantage_delivery: "快速配送",
        advantage_delivery_desc: "高效物流配送，确保及时交货",
        
        // 联系我们
        contact_title: "联系我们",
        contact_address: "地址",
        contact_phone: "电话",
        contact_email: "邮箱",
        contact_address_value: "山东省",
        contact_phone_value: "+86 XXXX-XXXX-XXXX",
        contact_email_value: "info@jinyuhang.com",
        
        contact_name: "您的姓名",
        contact_email_placeholder: "您的邮箱",
        contact_phone_placeholder: "您的电话",
        contact_message: "留言内容",
        contact_submit: "发送消息",
        
        // 页脚
        footer_copyright: "© 2024 山东金裕航机械有限公司. All rights reserved.",
        
        // 产品详情页
        breadcrumb_home: "首页",
        breadcrumb_products: "产品",
        breadcrumb_detail: "产品详情",
        
        price_label: "产品价格:",
        ref_price: "(参考价格)",
        stock_label: "库存状态:",
        in_stock: "有货",
        
        specs_title: "产品规格",
        inquiry_btn: "立即询价",
        contact_btn: "联系销售",
        
        advantages_product: "产品优势",
        
        description_title: "产品详细描述",
        tab_overview: "产品概述",
        tab_features: "主要特点",
        tab_applications: "应用场景",
        tab_warranty: "保修服务",
        
        related_products: "相关产品",
        
        inquiry_form_title: "产品询价",
        inquiry_name: "您的姓名",
        inquiry_email: "您的邮箱",
        inquiry_phone: "您的电话",
        inquiry_company: "公司名称",
        inquiry_message: "询价信息",
        inquiry_submit: "发送询价",
    },
    en: {
        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About Us",
        nav_contact: "Contact",
        
        hero_title: "Professional Engineering Machinery Solutions",
        hero_subtitle: "Providing high-quality engineering machinery equipment and professional services",
        hero_button: "Browse Products",
        
        products_title: "Main Products",
        products_subtitle: "We provide a range of high-performance engineering machinery equipment",
        
        excavator_name: "Mini Excavator",
        excavator_desc: "High-efficiency mini excavator suitable for various construction projects and earthwork",
        excavator_feature1: "✓ Powerful digging force",
        excavator_feature2: "✓ Precision control",
        excavator_feature3: "✓ Low fuel consumption",
        excavator_feature4: "✓ Easy to maintain",
        
        loader_name: "Skid Steer Loader",
        loader_desc: "Multi-functional skid steer loader flexible to meet various construction site needs",
        loader_feature1: "✓ Flexible turning",
        loader_feature2: "✓ Multiple attachments",
        loader_feature3: "✓ Efficient loading",
        loader_feature4: "✓ Strong reliability",
        
        container_name: "Folding Container House",
        container_desc: "Portable folding container house, quickly build temporary buildings",
        container_feature1: "✓ Quick deployment",
        container_feature2: "✓ Reusable",
        container_feature3: "✓ Strong structure",
        container_feature4: "✓ Low cost",
        
        detail_link: "View Details",
        
        about_title: "About Shandong Jinyuhang Machinery",
        about_text1: "Shandong Jinyuhang Machinery Co., Ltd. is a professional enterprise engaged in the sales and service of engineering machinery equipment. We are committed to providing customers with high-quality and efficient engineering machinery solutions.",
        about_text2: "Over the years, we have accumulated rich industry experience, established a perfect sales and after-sales service network, and won the trust and support of customers.",
        
        stat_experience: "Years of Industry Experience",
        stat_customers: "Satisfied Customers",
        stat_sales: "Equipment Sales",
        
        advantages_title: "Our Advantages",
        advantage_quality: "Quality Assurance",
        advantage_quality_desc: "Using high-quality components to ensure stable and reliable product performance",
        advantage_service: "Professional Service",
        advantage_service_desc: "24-hour customer service to meet all your needs",
        advantage_support: "Technical Support",
        advantage_support_desc: "Professional technical team provides complete after-sales support",
        advantage_delivery: "Fast Delivery",
        advantage_delivery_desc: "Efficient logistics ensure timely delivery",
        
        contact_title: "Contact Us",
        contact_address: "Address",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_address_value: "Shandong, China",
        contact_phone_value: "+86 XXXX-XXXX-XXXX",
        contact_email_value: "info@jinyuhang.com",
        
        contact_name: "Your Name",
        contact_email_placeholder: "Your Email",
        contact_phone_placeholder: "Your Phone",
        contact_message: "Message",
        contact_submit: "Send Message",
        
        footer_copyright: "© 2024 Shandong Jinyuhang Machinery Co., Ltd. All rights reserved.",
        
        breadcrumb_home: "Home",
        breadcrumb_products: "Products",
        breadcrumb_detail: "Product Details",
        
        price_label: "Price:",
        ref_price: "(Reference Price)",
        stock_label: "Stock Status:",
        in_stock: "In Stock",
        
        specs_title: "Product Specifications",
        inquiry_btn: "Inquire Now",
        contact_btn: "Contact Sales",
        
        advantages_product: "Product Advantages",
        
        description_title: "Product Description",
        tab_overview: "Overview",
        tab_features: "Features",
        tab_applications: "Applications",
        tab_warranty: "Warranty",
        
        related_products: "Related Products",
        
        inquiry_form_title: "Product Inquiry",
        inquiry_name: "Your Name",
        inquiry_email: "Your Email",
        inquiry_phone: "Your Phone",
        inquiry_company: "Company Name",
        inquiry_message: "Inquiry Message",
        inquiry_submit: "Send Inquiry",
    },
    es: {
        nav_home: "Inicio",
        nav_products: "Productos",
        nav_about: "Acerca de",
        nav_contact: "Contacto",
        
        hero_title: "Soluciones Profesionales de Maquinaria de Ingeniería",
        hero_subtitle: "Proporcionamos equipos de maquinaria de ingeniería de alta calidad y servicios profesionales",
        hero_button: "Ver Productos",
        
        products_title: "Productos Principales",
        products_subtitle: "Ofrecemos una gama de equipos de maquinaria de ingeniería de alto rendimiento",
        
        excavator_name: "Excavadora Pequeña",
        excavator_desc: "Excavadora pequeña de alta eficiencia adecuada para varios proyectos de construcción y movimiento de tierra",
        excavator_feature1: "✓ Potencia de excavación poderosa",
        excavator_feature2: "✓ Control de precisión",
        excavator_feature3: "✓ Bajo consumo de combustible",
        excavator_feature4: "✓ Fácil de mantener",
        
        loader_name: "Cargadora de Dirección Deslizante",
        loader_desc: "Cargadora de dirección deslizante multifuncional flexible para satisfacer varias necesidades de sitios de construcción",
        loader_feature1: "✓ Giro flexible",
        loader_feature2: "✓ Múltiples accesorios",
        loader_feature3: "✓ Carga eficiente",
        loader_feature4: "✓ Fuerte confiabilidad",
        
        container_name: "Casa Contenedor Plegable",
        container_desc: "Casa contenedor plegable portátil, construya rápidamente edificios temporales",
        container_feature1: "✓ Despliegue rápido",
        container_feature2: "✓ Reutilizable",
        container_feature3: "✓ Estructura fuerte",
        container_feature4: "✓ Costo bajo",
        
        detail_link: "Ver Detalles",
        
        about_title: "Acerca de Shandong Jinyuhang Machinery",
        about_text1: "Shandong Jinyuhang Machinery Co., Ltd. es una empresa profesional dedicada a la venta y servicio de equipos de maquinaria de ingeniería. Nos comprometemos a proporcionar soluciones de maquinaria de ingeniería de alta calidad y eficiencia.",
        about_text2: "A lo largo de los años, hemos acumulado una rica experiencia industrial, establecido una red de ventas y servicio postventa perfecta, ganado la confianza y apoyo de los clientes.",
        
        stat_experience: "Años de Experiencia",
        stat_customers: "Clientes Satisfechos",
        stat_sales: "Ventas de Equipos",
        
        advantages_title: "Nuestras Ventajas",
        advantage_quality: "Garantía de Calidad",
        advantage_quality_desc: "Usar componentes de alta calidad para garantizar el rendimiento estable y confiable del producto",
        advantage_service: "Servicio Profesional",
        advantage_service_desc: "Servicio al cliente 24 horas para satisfacer todas sus necesidades",
        advantage_support: "Soporte Técnico",
        advantage_support_desc: "Equipo técnico profesional brinda apoyo posventa completo",
        advantage_delivery: "Entrega Rápida",
        advantage_delivery_desc: "Logística eficiente para garantizar entrega oportuna",
        
        contact_title: "Contáctenos",
        contact_address: "Dirección",
        contact_phone: "Teléfono",
        contact_email: "Correo Electrónico",
        contact_address_value: "Shandong, China",
        contact_phone_value: "+86 XXXX-XXXX-XXXX",
        contact_email_value: "info@jinyuhang.com",
        
        contact_name: "Su Nombre",
        contact_email_placeholder: "Su Correo Electrónico",
        contact_phone_placeholder: "Su Teléfono",
        contact_message: "Mensaje",
        contact_submit: "Enviar Mensaje",
        
        footer_copyright: "© 2024 Shandong Jinyuhang Machinery Co., Ltd. Todos los derechos reservados.",
        
        breadcrumb_home: "Inicio",
        breadcrumb_products: "Productos",
        breadcrumb_detail: "Detalles del Producto",
        
        price_label: "Precio:",
        ref_price: "(Precio de Referencia)",
        stock_label: "Estado de Stock:",
        in_stock: "En Stock",
        
        specs_title: "Especificaciones del Producto",
        inquiry_btn: "Solicitar Información",
        contact_btn: "Contactar Ventas",
        
        advantages_product: "Ventajas del Producto",
        
        description_title: "Descripción del Producto",
        tab_overview: "Descripción General",
        tab_features: "Características",
        tab_applications: "Aplicaciones",
        tab_warranty: "Garantía",
        
        related_products: "Productos Relacionados",
        
        inquiry_form_title: "Consulta de Producto",
        inquiry_name: "Su Nombre",
        inquiry_email: "Su Correo Electrónico",
        inquiry_phone: "Su Teléfono",
        inquiry_company: "Nombre de Empresa",
        inquiry_message: "Mensaje de Consulta",
        inquiry_submit: "Enviar Consulta",
    },
    pt: {
        nav_home: "Início",
        nav_products: "Produtos",
        nav_about: "Sobre Nós",
        nav_contact: "Contato",
        
        hero_title: "Soluções Profissionais de Maquinaria de Engenharia",
        hero_subtitle: "Fornecemos equipamentos de maquinaria de engenharia de alta qualidade e serviços profissionais",
        hero_button: "Ver Produtos",
        
        products_title: "Produtos Principais",
        products_subtitle: "Oferecemos uma gama de equipamentos de maquinaria de engenharia de alto desempenho",
        
        excavator_name: "Escavadeira Pequena",
        excavator_desc: "Escavadeira pequena de alta eficiência adequada para vários projetos de construção e movimento de terra",
        excavator_feature1: "✓ Força de escavação poderosa",
        excavator_feature2: "✓ Controle de precisão",
        excavator_feature3: "✓ Baixo consumo de combustível",
        excavator_feature4: "✓ Fácil de manter",
        
        loader_name: "Carregadeira de Direção Deslizante",
        loader_desc: "Carregadeira de direção deslizante multifuncional flexível para atender várias necessidades do canteiro",
        loader_feature1: "✓ Giro flexível",
        loader_feature2: "✓ Múltiplos acessórios",
        loader_feature3: "✓ Carregamento eficiente",
        loader_feature4: "✓ Forte confiabilidade",
        
        container_name: "Casa Contêiner Dobrável",
        container_desc: "Casa contêiner dobrável portátil, construir rapidamente edifícios temporários",
        container_feature1: "✓ Implantação rápida",
        container_feature2: "✓ Reutilizável",
        container_feature3: "✓ Estrutura forte",
        container_feature4: "✓ Custo baixo",
        
        detail_link: "Ver Detalhes",
        
        about_title: "Sobre Shandong Jinyuhang Machinery",
        about_text1: "Shandong Jinyuhang Machinery Co., Ltd. é uma empresa profissional dedicada à venda e serviço de equipamentos de maquinaria de engenharia. Nos comprometemos a fornecer soluções de maquinaria de engenharia de alta qualidade e eficiência.",
        about_text2: "Ao longo dos anos, acumulamos rica experiência industrial, estabelecemos uma rede perfeita de vendas e serviço pós-venda, conquistamos a confiança e o apoio dos clientes.",
        
        stat_experience: "Anos de Experiência",
        stat_customers: "Clientes Satisfeitos",
        stat_sales: "Vendas de Equipamentos",
        
        advantages_title: "Nossas Vantagens",
        advantage_quality: "Garantia de Qualidade",
        advantage_quality_desc: "Usar componentes de alta qualidade para garantir desempenho estável e confiável do produto",
        advantage_service: "Serviço Profissional",
        advantage_service_desc: "Serviço ao cliente 24 horas para atender todas as suas necessidades",
        advantage_support: "Suporte Técnico",
        advantage_support_desc: "Equipe técnica profissional oferece suporte pós-venda completo",
        advantage_delivery: "Entrega Rápida",
        advantage_delivery_desc: "Logística eficiente para garantir entrega oportuna",
        
        contact_title: "Entre em Contato",
        contact_address: "Endereço",
        contact_phone: "Telefone",
        contact_email: "E-mail",
        contact_address_value: "Shandong, China",
        contact_phone_value: "+86 XXXX-XXXX-XXXX",
        contact_email_value: "info@jinyuhang.com",
        
        contact_name: "Seu Nome",
        contact_email_placeholder: "Seu E-mail",
        contact_phone_placeholder: "Seu Telefone",
        contact_message: "Mensagem",
        contact_submit: "Enviar Mensagem",
        
        footer_copyright: "© 2024 Shandong Jinyuhang Machinery Co., Ltd. Todos os direitos reservados.",
        
        breadcrumb_home: "Início",
        breadcrumb_products: "Produtos",
        breadcrumb_detail: "Detalhes do Produto",
        
        price_label: "Preço:",
        ref_price: "(Preço de Referência)",
        stock_label: "Status de Estoque:",
        in_stock: "Em Estoque",
        
        specs_title: "Especificações do Produto",
        inquiry_btn: "Solicitar Informações",
        contact_btn: "Contatar Vendas",
        
        advantages_product: "Vantagens do Produto",
        
        description_title: "Descrição do Produto",
        tab_overview: "Visão Geral",
        tab_features: "Características",
        tab_applications: "Aplicações",
        tab_warranty: "Garantia",
        
        related_products: "Produtos Relacionados",
        
        inquiry_form_title: "Consulta de Produto",
        inquiry_name: "Seu Nome",
        inquiry_email: "Seu E-mail",
        inquiry_phone: "Seu Telefone",
        inquiry_company: "Nome da Empresa",
        inquiry_message: "Mensagem de Consulta",
        inquiry_submit: "Enviar Consulta",
    },
    ar: {
        nav_home: "الصفحة الرئيسية",
        nav_products: "المنتجات",
        nav_about: "عن الشركة",
        nav_contact: "اتصل بنا",
        
        hero_title: "حلول متخصصة لآلات الهندسة",
        hero_subtitle: "نوفر معدات آلات هندسية عالية الجودة وخدمات احترافية",
        hero_button: "عرض المنتجات",
        
        products_title: "المنتجات الرئيسية",
        products_subtitle: "نحن نوفر مجموعة من معدات آلات الهندسة عالية الأداء",
        
        excavator_name: "حفار صغير",
        excavator_desc: "حفار صغير عالي الكفاءة مناسب لمختلف مشاريع البناء وأعمال الحفر",
        excavator_feature1: "✓ قوة حفر قوية",
        excavator_feature2: "✓ تحكم دقيق",
        excavator_feature3: "✓ استهلاك وقود منخفض",
        excavator_feature4: "✓ سهل الصيانة",
        
        loader_name: "محمل الانزلاق",
        loader_desc: "محمل انزلاق متعدد الوظائف مرن يلبي احتياجات مختلفة لمواقع البناء",
        loader_feature1: "✓ دوران مرن",
        loader_feature2: "✓ ملحقات متعددة",
        loader_feature3: "✓ تحميل فعال",
        loader_feature4: "✓ موثوقية قوية",
        
        container_name: "منزل الحاوية القابلة للطي",
        container_desc: "منزل حاوية قابل للطي محمول، بناء المباني المؤقتة بسرعة",
        container_feature1: "✓ نشر سريع",
        container_feature2: "✓ قابل لإعادة الاستخدام",
        container_feature3: "✓ هيكل قوي",
        container_feature4: "✓ تكلفة منخفضة",
        
        detail_link: "عرض التفاصيل",
        
        about_title: "عن شركة Shandong Jinyuhang Machinery",
        about_text1: "شركة Shandong Jinyuhang Machinery Co., Ltd. هي شركة متخصصة في بيع وخدمة معدات آلات الهندسة. نحن ملتزمون بتوفير حلول آلات هندسية عالية الجودة والكفاءة.",
        about_text2: "على مر السنين، تراكمت لدينا خبرة صناعية غنية، وأنشأنا شبكة مبيعات وخدمة ما بعد البيع مثالية، واكتسبنا ثقة وتأييد العملاء.",
        
        stat_experience: "سنوات من الخبرة",
        stat_customers: "عملاء راضون",
        stat_sales: "مبيعات المعدات",
        
        advantages_title: "مميزاتنا",
        advantage_quality: "ضمان الجودة",
        advantage_quality_desc: "استخدام مكونات عالية الجودة لضمان أداء المنتج المستقر والموثوق",
        advantage_service: "خدمة احترافية",
        advantage_service_desc: "خدمة العملاء على مدار 24 ساعة لتلبية جميع احتياجاتك",
        advantage_support: "الدعم الفني",
        advantage_support_desc: "فريق تقني متخصص يوفر دعم شامل بعد البيع",
        advantage_delivery: "التوصيل السريع",
        advantage_delivery_desc: "لوجستيات فعالة لضمان التسليم في الوقت المناسب",
        
        contact_title: "اتصل بنا",
        contact_address: "العنوان",
        contact_phone: "الهاتف",
        contact_email: "البريد الإلكتروني",
        contact_address_value: "شاندونغ، الصين",
        contact_phone_value: "+86 XXXX-XXXX-XXXX",
        contact_email_value: "info@jinyuhang.com",
        
        contact_name: "اسمك",
        contact_email_placeholder: "بريدك الإلكتروني",
        contact_phone_placeholder: "هاتفك",
        contact_message: "الرسالة",
        contact_submit: "إرسال رسالة",
        
        footer_copyright: "© 2024 شركة Shandong Jinyuhang Machinery Co., Ltd. جميع الحقوق محفوظة.",
        
        breadcrumb_home: "الصفحة الرئيسية",
        breadcrumb_products: "المنتجات",
        breadcrumb_detail: "تفاصيل المنتج",
        
        price_label: "السعر:",
        ref_price: "(سعر مرجعي)",
        stock_label: "حالة المخزون:",
        in_stock: "متوفر",
        
        specs_title: "مواصفات المنتج",
        inquiry_btn: "استفسر الآن",
        contact_btn: "اتصل بالمبيعات",
        
        advantages_product: "مميزات المنتج",
        
        description_title: "وصف المنتج",
        tab_overview: "نظرة عامة",
        tab_features: "المميزات",
        tab_applications: "التطبيقات",
        tab_warranty: "الضمان",
        
        related_products: "المنتجات ذات الصلة",
        
        inquiry_form_title: "استفسار عن المنتج",
        inquiry_name: "اسمك",
        inquiry_email: "بريدك الإلكتروني",
        inquiry_phone: "هاتفك",
        inquiry_company: "اسم الشركة",
        inquiry_message: "رسالة الاستفسار",
        inquiry_submit: "إرسال الاستفسار",
    },
    ru: {
        nav_home: "Главная",
        nav_products: "Продукты",
        nav_about: "О нас",
        nav_contact: "Контакты",
        
        hero_title: "Профессиональные решения инженерной техники",
        hero_subtitle: "Предоставляем высококачественное оборудование и профессиональные услуги",
        hero_button: "Просмотреть продукты",
        
        products_title: "Основные продукты",
        products_subtitle: "Мы предоставляем ряд высокопроизводительного инженерного оборудования",
        
        excavator_name: "Мини-экскаватор",
        excavator_desc: "Высокоэффективный мини-экскаватор подходит для различных строительных проектов и земляных работ",
        excavator_feature1: "✓ Мощная сила копания",
        excavator_feature2: "✓ Точный контроль",
        excavator_feature3: "✓ Низкое потребление топлива",
        excavator_feature4: "✓ Легко обслуживается",
        
        loader_name: "Скоростной погрузчик",
        loader_desc: "Многофункциональный скоростной погрузчик гибко удовлетворяет различные потребности строительной площадки",
        loader_feature1: "✓ Гибкий поворот",
        loader_feature2: "✓ Множество приспособлений",
        loader_feature3: "✓ Эффективная погрузка",
        loader_feature4: "✓ Высокая надежность",
        
        container_name: "Складной контейнерный дом",
        container_desc: "Портативный складной контейнерный дом, быстро возводите временные здания",
        container_feature1: "✓ Быстроразвертывание",
        container_feature2: "✓ Многоразовое использование",
        container_feature3: "✓ Прочная конструкция",
        container_feature4: "✓ Низкая стоимость",
        
        detail_link: "Подробнее",
        
        about_title: "О компании Shandong Jinyuhang Machinery",
        about_text1: "Компания Shandong Jinyuhang Machinery Co., Ltd. - профессиональное предприятие, специализирующееся на продаже и обслуживании инженерного оборудования. Мы стремимся предоставить высококачественные и эффективные решения в области инженерной техники.",
        about_text2: "На протяжении многих лет мы накопили богатый опыт в отрасли, создали совершенную сеть продаж и послепродажного обслуживания, завоевав доверие и поддержку клиентов.",
        
        stat_experience: "Лет опыта",
        stat_customers: "Довольных клиентов",
        stat_sales: "Продажи оборудования",
        
        advantages_title: "Наши преимущества",
        advantage_quality: "Гарантия качества",
        advantage_quality_desc: "Использование высококачественных компонентов для обеспечения стабильной и надежной работы продукта",
        advantage_service: "Профессиональное обслуживание",
        advantage_service_desc: "Круглосуточное обслуживание клиентов для удовлетворения всех ваших потребностей",
        advantage_support: "Техническая поддержка",
        advantage_support_desc: "Профессиональная техническая команда обеспечивает полную послепродажную поддержку",
        advantage_delivery: "Быстрая доставка",
        advantage_delivery_desc: "Эффективная логистика обеспечивает своевременную доставку",
        
        contact_title: "Контакты",
        contact_address: "Адрес",
        contact_phone: "Телефон",
        contact_email: "Электронная почта",
        contact_address_value: "Шаньдун, Китай",
        contact_phone_value: "+86 XXXX-XXXX-XXXX",
        contact_email_value: "info@jinyuhang.com",
        
        contact_name: "Ваше имя",
        contact_email_placeholder: "Ваша электронная почта",
        contact_phone_placeholder: "Ваш телефон",
        contact_message: "Сообщение",
        contact_submit: "Отправить сообщение",
        
        footer_copyright: "© 2024 ООО «Компания Shandong Jinyuhang Machinery». Все права защищены.",
        
        breadcrumb_home: "Главная",
        breadcrumb_products: "Продукты",
        breadcrumb_detail: "Описание продукта",
        
        price_label: "Цена:",
        ref_price: "(Справочная цена)",
        stock_label: "Статус запасов:",
        in_stock: "На складе",
        
        specs_title: "Технические характеристики",
        inquiry_btn: "Запросить информацию",
        contact_btn: "Связаться с продажами",
        
        advantages_product: "Преимущества продукта",
        
        description_title: "Описание продукта",
        tab_overview: "Обзор",
        tab_features: "Характеристики",
        tab_applications: "Применение",
        tab_warranty: "Гарантия",
        
        related_products: "Связанные продукты",
        
        inquiry_form_title: "Запрос информации о продукте",
        inquiry_name: "Ваше имя",
        inquiry_email: "Ваша электронная почта",
        inquiry_phone: "Ваш телефон",
        inquiry_company: "Название компании",
        inquiry_message: "Сообщение запроса",
        inquiry_submit: "Отправить запрос",
    }
};

// ============================================
// 获取翻译文本
// ============================================

function getTranslation(key, lang = 'zh') {
    return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
}

// ============================================
// 获取当前语言
// ============================================

function getCurrentLanguage() {
    const lang = localStorage.getItem('jinyuhang-language') || 'zh';
    return lang;
}

// ============================================
// 设置语言
// ============================================

function setLanguage(lang) {
    localStorage.setItem('jinyuhang-language', lang);
    updatePageLanguage(lang);
}

// ============================================
// 更新页面语言
// ============================================

function updatePageLanguage(lang) {
    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // 更新 HTML 方向（用于阿拉伯语）
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
    }
    
    // 更新当前活跃的语言按钮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`)?.classList.add('active');
}

// ============================================
// 初始化语言选择器
// ============================================

function initLanguageSelector() {
    const currentLang = getCurrentLanguage();
    updatePageLanguage(currentLang);
    
    // 为语言按钮添加事件监听
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// ============================================
// 页面加载完成后初始化
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.language-selector')) {
        initLanguageSelector();
    }
});
