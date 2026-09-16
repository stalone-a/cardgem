
function getCurrentSearchQuery() {
    return (typeof window !== 'undefined' && window.currentSearchQuery) ? window.currentSearchQuery : '';
}

const products = [
    {
        id: 1,
        name: "Мастеркард Ziraat",
        price: 6500,
        category: "debit",
        image: "images/products/mastercard-ziraat.webp",
        description: "",
        images: ["images/products/mastercard-ziraat.webp", "images/products/mastercard-ziraat2.webp"],
        reviews: [
          {
                    "author": "Влад",
                    "rating": 5,
                    "text": "карта работает, никаких проблем, доставка была оперативная.",
                    "date": "2025-09-02"
          }
]
    },
    {
        id: 2,
        name: "Альфабанк Базовая",
        price: 4000,
        category: "debit",
        image: "images/products/alfabank-card.webp",
        description: "Привлекательное предложение предназначено для тех, кто желает приобрести дебетовую банковскую карту Альфабанка, стремясь обеспечить анонимное управление своими финансами.",
        images: ["images/products/alfabank-card.webp", "images/products/alfabank-card2.webp"],
        reviews: [
          {
                    "author": "Costy",
                    "rating": 5,
                    "text": "Всё ровно, доставили курьером через пару дней, симка данные от карты в комплекте",
                    "date": "2026-03-28"
          },
          {
                    "author": "user",
                    "rating": 5,
                    "text": "Неоднократно покупал, всегда все работало как надо. На рынке сейчас крайне мало селлеров. Буду брать ещё.",
                    "date": "2025-01-12"
          },
          {
                    "author": "Серый",
                    "rating": 5,
                    "text": "Пользуюсь уже месяц, все стабильно работает.",
                    "date": "2024-05-29"
          }
]
    },
    {
        id: 3,
        name: "Верифицированный ЮMoney Аккаунт",
        price: 1900,
        category: "ewallet",
        image: "images/products/yumoney-verified.webp",
        description: "Чистый верифицированный аккаунт ЮMoney с полными данными доступа и документами",
        images: ["images/products/yumoney-verified.webp", "images/products/yumoney-verified2.webp"],
        reviews: [
          {
                    "author": "md",
                    "rating": 5,
                    "text": "Пока проблем нет",
                    "date": "2026-08-26"
          },
          {
                    "author": "max22",
                    "rating": 5,
                    "text": "Хорошо работает юмани под съем денег через Атм. На p2p тоже лучше озона и банков тройки типа сбера альфы и втб. Недооцененный способ если нужно работать с небольшими суммами до 200-300 тысяч в месяц.",
                    "date": "2026-05-11"
          },
          {
                    "author": "Сергей",
                    "rating": 5,
                    "text": "Приобрел здесь уже два кошелька, сделка успешно завершена за что спасибо.",
                    "date": "2025-03-22"
          },
          {
                    "author": "Anon",
                    "rating": 5,
                    "text": "Купил юмани готовый и с идентификацией, полная дает 500 тысяч, многим подойдет. Мне мало(продаву нет претензий, знал про это и раньше), гонять грязь не советую быстро в блок попадете(на это лучше qiwi). А для часных платежек будет полезным, вериф на русские данные если важно.",
                    "date": "2024-06-01"
          },
          {
                    "author": "Лера",
                    "rating": 5,
                    "text": "Это был мой первый опыт, но для работы потребовалось купить юмани аккаунт идентифицированный, нашла в айти чате телеграмном ссылку на этот магазин. Подверждаю что юмани аккаунт с полностью пройденой верификацией.",
                    "date": "2023-12-18"
          }
]
    },
    {
        id: 4,
        name: "Верифицированный PayPal Аккаунт",
        price: 1500,
        category: "ewallet",
        image: "images/products/paypal-verified.webp",
        description: "Чистый аккаунт с пройденной верификацией и возрастом более 30 суток",
        images: ["images/products/paypal-verified.webp", "images/products/paypal-verified2.webp"],
        reviews: [
          {
                    "author": "Oleg",
                    "rating": 5,
                    "text": "Лучшие. акк с транзакциями просто пушка! +рек",
                    "date": "2026-09-08"
          },
          {
                    "author": "Андрей К.",
                    "rating": 5,
                    "text": "Отличный аккаунт! Взял для работы с зарубежными клиентами, всё работает без проблем. Верификация действительно пройдена, лимиты высокие. Доставили быстро, инструкция подробная. Рекомендую!",
                    "date": "2025-10-18"
          }
]
    },
    {
        id: 29,
        name: "PayPal Аккаунт с балансом 500$ - 1000$",
        price: 1800,
        category: "ewallet",
        image: "images/products/paypal-verified.webp",
        description: "Аккаунт PayPal + баланс карты [500$-1000$] + полный доступ к электронной почте",
        images: ["images/products/paypal-verified.webp", "images/products/paypal500.webp"],
        reviews: [
          {
                    "author": "Саня",
                    "rating": 5,
                    "text": "Мин через 15 получил свой аккаунт, вывел по гайду на свой основной счет",
                    "date": "2026-09-02"
          },
          {
                    "author": "FJKLsdf2",
                    "rating": 5,
                    "text": "халява",
                    "date": "2026-07-24"
          },
          {
                    "author": "UGGYN",
                    "rating": 5,
                    "text": "После получения акка вывел бабосы через обменник в крипту",
                    "date": "2026-03-07"
          }
]
    },
    {
        id: 30,
        name: "PayPal Аккаунт с балансом 1000$+",
        price: 2500,
        category: "ewallet",
        image: "images/products/paypal-verified.webp",
        description: "Аккаунт PayPal + баланс карты [1000$+] + полный доступ к электронной почте",
        images: ["images/products/paypal-verified.webp", "images/products/paypal1000.webp"],
        reviews: [
          {
                    "author": "321",
                    "rating": 5,
                    "text": "Лучший сервис",
                    "date": "2026-08-19"
          },
          {
                    "author": "Антн",
                    "rating": 5,
                    "text": "Выпал аккаунт с полутрой тысяч, вывел по инструкции. норм",
                    "date": "2026-05-24"
          }
]
    },

    {
        id: 7,
        name: "Расширенный Ozon Банк Аккаунт",
        price: 2500,
        category: "ewallet",
        image: "images/products/ozon-bank-extended.webp",
        description: "Здесь вы можете купить аккаунт Ozon озон банка, который полностью готов к применению для различных платежей. Метод верификации на аккаунте произведен через \"Госуслуги\", статус счета расширенный, вероятность блокировки при использовании такого аккаунта практически нулевая.",
        images: ["images/products/ozon-bank-extended.webp", "images/products/ozon-bank-extended2.webp"],
        reviews: [
          {
                    "author": "Uusysusu",
                    "rating": 5,
                    "text": "Приобрел готовый аккаунт озон банка, могу подтвердить его работоспособность в первую очередь) Заходить через соксы неудобно немного, но я уже привязал виртуалку мира и в принципе платежи проходят. По самому банку считаю комментировать смысла нет, все лимиты хоть счет и расширенный по максималке и так понятны. Работать удобно, аккаунт свежий.",
                    "date": "2026-09-09"
          },
          {
                    "author": "Ромчик",
                    "rating": 5,
                    "text": "Озон нормально подходит для небольших оплат , много денег не прогонишь наверное как на райфе или сбере , но в целом норм",
                    "date": "2026-04-16"
          },
          {
                    "author": "mark",
                    "rating": 5,
                    "text": "Выбираю что купить лучше аккаунт озона или юмани, там и там есть виртуалка и свои лимиты. Типа ничем не отличаются, но по слухам озон более лоялен к обналу со счета, а юмани могут перманентно заблокировать аккаунт. Склоняюсь купить озон банка счет, но еще думаю",
                    "date": "2025-07-13"
          }
]
    },
    {
        id: 8,
        name: "Мастеркард Kaspi Gold",
        price: 7000,
        category: "debit",
        image: "images/products/mastercard-kaspi-gold.webp",
        description: "",
        images: ["images/products/mastercard-kaspi-gold.webp", "images/products/mastercard-kaspi-gold2.webp"],
        reviews: [
          {
                    "author": "Арсений",
                    "rating": 5,
                    "text": "Высокие лимиты, быстрые переводы. Отличная карта для международных операций.",
                    "date": "2025-10-16"
          },
          {
                    "author": "Арман",
                    "rating": 5,
                    "text": "Получил карту быстро, все документы в порядке. Продолжает работать без сбоев. Рекомендую!",
                    "date": "2025-06-22"
          }
]
    },
    {
        id: 9,
        name: "Верифицированный OlduBil Аккаунт",
        price: 2000,
        category: "ewallet",
        image: "images/products/oldubil-verified.webp",
        description: "OLduBil (ОлдуБил) — это современная турецкая платежная система, созданная для упрощения финансовых операций как для физических, так и для юридических лиц. У нас вы можете купить верифицированный аккаунт Oldubil, зарегистрированный на гражданина Турции с уже выпущенной виртуальной дебетовой банковской картой Mastercard.",
        images: ["images/products/oldubil-verified.webp", "images/products/oldubil-verified2.webp"],
        reviews: [
          {
                    "author": "lake",
                    "rating": 5,
                    "text": "Прошло без проблем",
                    "date": "2026-06-28"
          }
]
    },
    {
        id: 10,
        name: "Верифицированный Wise Аккаунт",
        price: 2200,
        category: "ewallet",
        image: "images/products/wise-verified.webp",
        description: "Wise (бывший TransferWise) – популярный финансовый сервис, позволяющий отправлять и получать деньги по всему миру с минимальными комиссиями. Купить верифицированный аккаунт Wise – это ваш быстрый старт для международных переводов без ожидания верификации.",
        images: ["images/products/wise-verified.webp", "images/products/wise-verified2.webp"],
        reviews: [
          {
                    "author": "Goshan",
                    "rating": 5,
                    "text": "Лучший магазин, приобрел уже несколько аккаунтов",
                    "date": "2026-09-07"
          },
          {
                    "author": "Тёма",
                    "rating": 5,
                    "text": "Пользуюсь для работы с зарубежными партнерами. Переводы идут мгновенно, комиссии низкие. Верификация была полная, никаких дополнительных проверок не требовалось. Очень доволен!",
                    "date": "2024-03-29"
          }
]
    },
    {
        id: 11,
        name: "Верифицированный Pyypl Аккаунт",
        price: 2000,
        category: "ewallet",
        image: "images/products/pyypl-verified.webp",
        description: "Готовый верифицированный аккаунт Pyypl с виртуальной картой – это ваш мгновенный доступ к онлайн-платежам! Полностью рабочий аккаунт Pyypl с уже выпущенной виртуальной картой, оформленный на гражданина ЕС.",
        images: ["images/products/pyypl-verified.webp", "images/products/pyypl-verified2.webp"],
        reviews: []
    },

    {
        id: 12,
        name: "Максимальный Яндекс ПЭЙ аккаунт",
        price: 2500,
        category: "ewallet",
        image: "images/products/yandex-pay-maximum.webp",
        description: "Продаем аккаунт Яндекс Пэй (Яндекс Банк) с максимальным статусом идентификации",
        images: ["images/products/yandex-pay-maximum.webp", "images/products/yandex-pay-maximum2.webp"],
        reviews: [
          {
                    "author": "Я",
                    "rating": 5,
                    "text": "Лайкнул если бы мог. Отличный банк и чистый аккаунт, без фз 115 пока-неделю. Посмотрим как будет дальше, скоро буду покупать еще парочку.",
                    "date": "2026-05-07"
          },
          {
                    "author": "Андрей",
                    "rating": 5,
                    "text": "Оформил заказ вчера утром на аккаунт яндекс пэй, только вечером пришли данные по оплате. Скинул уже заполночь платеж в битках, сегодня с утра на мыле все даные акка. С админами не общался, инструктаж по оплате вглядел туповато если чел не разбирается с криптой. Загрузил прилоежние яндекс пэй из гугл маркера и авторизовался, верификация стоит максимальная, лимиты нормальные.",
                    "date": "2025-06-05"
          }
]
    },
    {
        id: 16,
        name: "Верифицированный Revolut Аккаунт",
        price: 2000,
        category: "ewallet",
        image: "images/products/revolut-verified.webp",
        description: "Чистый аккаунт с пройденной верификацией и возрастом более 30 суток. Для стран ЕС доступен выпуск дебетовой карты.",
        images: ["images/products/revolut-verified.webp", "images/products/revolut-verified2.webp"],
        reviews: [
          {
                    "author": "Rakasin",
                    "rating": 5,
                    "text": "Продавец просто топчик, сап работает отлично, все помогли и рассказали как запустить акк, огромное спасибо",
                    "date": "2026-07-12"
          }
]
    },
    {
        id: 17,
        name: "Верифицированный Volet (Advcash) Аккаунт",
        price: 2000,
        category: "ewallet",
        image: "images/products/volet-advcash-verified.webp",
        description: "Чистый аккаунт с пройденной верификацией и возрастом более 30 суток. Активирована виртуальная карта Europe Virtual.",
        images: ["images/products/volet-advcash-verified.webp", "images/products/volet-advcash-verified2.webp"],
        reviews: []
    },
    {
        id: 18,
        name: "Верифицированный Skrill Аккаунт",
        price: 2300,
        category: "ewallet",
        image: "images/products/skrill-verified.webp",
        description: "Чистый аккаунт с пройденной верификацией и возрастом более 30 суток.",
        images: ["images/products/skrill-verified.webp", "images/products/skrill-verified2.webp"],
        reviews: []
    },
    {
        id: 19,
        name: "Верифицированный Bybit Аккаунт",
        price: 2000,
        category: "ewallet",
        image: "images/products/bybit-verified.webp",
        description: "Верифицированный аккаунт Bybit для торговли криптовалютами с полным доступом ко всем функциям платформы.",
        images: ["images/products/bybit-verified.webp", "images/products/bybit-verified2.webp"],
        reviews: [
          {
                    "author": "wasd",
                    "rating": 5,
                    "text": "аккаунт действительно прогретый, для п2п то что нужно",
                    "date": "2026-05-31"
          },
          {
                    "author": "Yurik",
                    "rating": 5,
                    "text": "Купил тут аккаунт bybit, выдержка на акке чуть больше 2 месяцев со времени верификации. вроде все работает",
                    "date": "2025-11-22"
          }
]
    },
    {
        id: 305,
        name: "Bybit Аккаунт с балансом 500$ - 1000$",
        price: 2400,
        category: "ewallet",
        image: "images/products/bybit-verified.webp",
        description: "Взлом аккаунта Coinbase с полным доступом и балансом 1200 - 2000 долларов США. В комплекте руководство.",
        images: ["images/products/bybit-verified.webp", "images/products/bybit500.webp"],
        reviews: [
          {
                    "author": "сим",
                    "rating": 5,
                    "text": "Со входом проблем не было",
                    "date": "2026-06-15"
          }
]
    },
    {
        id: 20,
        name: "Верифицированный Binance Аккаунт",
        price: 2200,
        category: "ewallet",
        image: "images/products/binance-verified.webp",
        description: "Верифицированный аккаунт Binance с полным доступом к крупнейшей криптовалютной бирже мира.",
        images: ["images/products/binance-verified.webp", "images/products/binance-verified2.webp"],
        reviews: [
          {
                    "author": "Вадим",
                    "rating": 5,
                    "text": "Аккаунт полностью рабочий, документы все на месте",
                    "date": "2026-02-09"
          }
]
    },
    {
        id: 303,
        name: "Binance Аккаунт с крипто балансом 1000$+",  
        price: 2700,
        category: "ewallet",
        image: "images/products/binance-verified.webp",
        description: "Взлом аккаунта Binance с полным доступом и балансом 1000 + долларов США. В комплекте руководство.",
        images: ["images/products/binance-verified.webp", "images/products/binance1000.webp"],
        reviews: [
          {
                    "author": "boy",
                    "rating": 5,
                    "text": "Аккаунт скинули моментально, обещанный баланс на месте вывел без проблем",
                    "date": "2026-07-05"
          }
]
    },
    {
        id: 21,
        name: "Верифицированный OKX Аккаунт",
        price: 2000,
        category: "ewallet",
        image: "images/products/okx-verified.webp",
        description: "Верифицированный аккаунт OKX с полным доступом к передовой криптовалютной торговой платформе.",
        images: ["images/products/okx-verified.webp", "images/products/okx-verified2.webp"],
        reviews: [
          {
                    "author": "Игорь",
                    "rating": 5,
                    "text": "Качественный верифицированный аккаунт. Торгую, никаких проблем.",
                    "date": "2026-01-18"
          }
]
    },
    {
        id: 26,
        name: "Верифицированный MEXC Аккаунт",
        price: 1900,
        category: "ewallet",
        image: "images/products/mexc-verified.webp",
        description: "Верифицированный аккаунт MEXC для торговли криптовалютами с полным доступом ко всем функциям платформы.",
        images: ["images/products/mexc-verified.webp", "images/products/mexc-verified2.webp"],
        reviews: [
          {
                    "author": "Рома",
                    "rating": 5,
                    "text": "Данные скинули быстро, в комплекте есть прокси для входа, что хорошо",
                    "date": "2026-04-11"
          },
          {
                    "author": "Niki",
                    "rating": 5,
                    "text": "взял пачку акков пока норм",
                    "date": "2026-01-12"
          }
]
    },
    {
        id: 27,
        name: "Верифицированный BingX Аккаунт",
        price: 2200,
        category: "ewallet",
        image: "images/products/bingx-verified.webp",
        description: "Верифицированный аккаунт BingX для торговли криптовалютами и копитрейдинга с полным доступом ко всем функциям платформы.",
        images: ["images/products/bingx-verified.webp", "images/products/bingx-verified2.webp"],
        reviews: []
    },
    {
        id: 28,
        name: "Верифицированный Coinbase Аккаунт",
        price: 2000,
        category: "ewallet",
        image: "images/products/coinbase-verified.webp",
        description: "Верифицированный аккаунт Coinbase для безопасной покупки, продажи и хранения криптовалюты.",
        images: ["images/products/coinbase-verified.webp", "images/products/coinbase-verified2.webp"],
        reviews: []
    },
    {
        id: 304,
        name: "Coinbase Аккаунт с балансом 1200$ - 2000$",
        price: 2500,
        category: "ewallet",
        image: "images/products/coinbase-verified.webp",
        description: "Взлом аккаунта Coinbase с полным доступом и балансом 1200 - 2000 долларов США. В комплекте руководство.",
        images: ["images/products/coinbase-verified.webp", "images/products/coinbase1200.webp"],
        reviews: [
          {
                    "author": "fjo3w",
                    "rating": 5,
                    "text": "Никаких проблем не было, инструкция очень подробная, думаю каждый разберется",
                    "date": "2026-05-09"
          }
]
    },
    {
        id: 24,
        name: "Мастеркард Royal Bank Of Scotland",
        price: 10500,
        category: "debit",
        image: "images/products/mastercard-rbs-card.webp",
        description: "",
        images: ["images/products/mastercard-rbs-card.webp", "images/products/mastercard-rbs-card2.webp"],
        reviews: [
          {
                    "author": "Юра",
                    "rating": 5,
                    "text": "Свободно пользуюсь в ЕС без ограничений уже несколько недель, пока полет нормальный.",
                    "date": "2025-08-18"
          }
]
    },
    {
        id: 25,
        name: "Мир Сбербанк",
        price: 4000,
        category: "debit",
        image: "images/products/mir-sberbank.webp",
        description: "",
        images: ["images/products/mir-sberbank.webp", "images/products/mir-sberbank2.webp"],
        reviews: [
          {
                    "author": "Артем А.",
                    "rating": 5,
                    "text": "Снимал уже под 200к без проблем, все четко работает. Топ как всегда",
                    "date": "2025-10-15"
          },
          {
                    "author": "Василий Петрович",
                    "rating": 5,
                    "text": "Годная штука, бабки гоняю через неё уже месяц. Никто не парится, в банкоматах работает везде.",
                    "date": "2025-09-03"
          },
          {
                    "author": "King",
                    "rating": 5,
                    "text": "Карта зашла! Использую для вывода крипты, все гладко. Мобильный банк работает норм, уведомления приходят моментально.",
                    "date": "2025-07-17"
          },
          {
                    "author": "Boom",
                    "rating": 5,
                    "text": "Нормальная карта, только один раз глючила в терминале. В остальном все ок, пользуюсь уже полгода.",
                    "date": "2025-02-08"
          },
          {
                    "author": "Мен",
                    "rating": 5,
                    "text": "Продавец отвечает быстро, сервис на высоте.",
                    "date": "2024-06-05"
          },
          {
                    "author": "КотоЛюб",
                    "rating": 5,
                    "text": "Ребят, все работает как надо! Снимал наличку в разных банкоматах - везде норм. СМС приходят сразу.",
                    "date": "2024-03-23"
          },
          {
                    "author": "Владислав",
                    "rating": 5,
                    "text": "Карта рабочая, но пин код пришел не сразу. В итоге все норм, но поволновался немного",
                    "date": "2023-11-14"
          },
          {
                    "author": "Сева",
                    "rating": 5,
                    "text": "Беру уже не первую карту здесь. Качество всегда на уровне, доставка быстрая. Однозначно рекомендую!",
                    "date": "2023-05-12"
          }
]
    },
    {
        id: 102,
        name: "ВТБ Платина",
        price: 6000,
        category: "debit",
        image: "images/products/vtb-platina.webp",
        description: "",
        images: ["images/products/vtb-platina.webp", "images/products/vtb-platina2.webp"],
        reviews: [
          {
                    "author": "Роман",
                    "rating": 5,
                    "text": "Работает отлично! Все функции доступны сразу, лимиты хорошие. Доставка быстрая, все как обещали.",
                    "date": "2025-11-07"
          },
          {
                    "author": "гг",
                    "rating": 5,
                    "text": "Качественный продукт, уже не первый раз заказываю. Все работает как надо, интернет-банк подключен сразу.",
                    "date": "2025-03-14"
          },
          {
                    "author": "Даня Д.",
                    "rating": 5,
                    "text": "Все документы в порядке, активация прошла без проблем.",
                    "date": "2024-06-20"
          }
]
    },
    {
        id: 201,
        name: "Сбербанк Голд",
        price: 6000,
        category: "debit",
        image: "images/products/sberbank-gold-card.webp",
        description: "",
        images: ["images/products/sberbank-gold-card.webp", "images/products/sberbank-gold-card2.webp"],
        reviews: [
          {
                    "author": "Labuba",
                    "rating": 5,
                    "text": "Брал много этих карточек, раньше хватало на долго, в последнее время блочат все чаще",
                    "date": "2025-10-02"
          },
          {
                    "author": "enthusiast",
                    "rating": 5,
                    "text": "Использую для вывода крипты, карта супер! Никаких заморочек с банком, всё анонимно и безопасно. Рекомендую всем крипто-трейдерам",
                    "date": "2025-05-05"
          },
          {
                    "author": "Алекс",
                    "rating": 5,
                    "text": "Брал для бизнеса, нужно было срочно. Ребята выручили за пару дней.",
                    "date": "2024-09-28"
          }
]
    },
    {
        id: 202,
        name: "Сбербанк Первый",
        price: 10000,
        category: "debit",
        image: "images/products/sberbank-perviy-card.webp",
        description: "",
        images: ["images/products/sberbank-perviy-card.webp", "images/products/sberbank-perviy-card2.webp"],
        reviews: [
          {
                    "author": "Invest",
                    "rating": 4,
                    "text": "Все норм, но цена кусается.",
                    "date": "2024-03-07"
          }
]
    },
    {
        id: 205,
        name: "Тинькофф Блэк (Т-Банк)",
        price: 6500,
        category: "debit",
        image: "images/products/tinkoff-black-card.webp",
        description: "",
        images: ["images/products/tinkoff-black-card.webp", "images/products/tinkoff-black-card2.webp"],
        reviews: [
          {
                    "author": "п2п чел",
                    "rating": 5,
                    "text": "Пользуюсь уже полгода, в целом доволен",
                    "date": "2026-05-03"
          },
          {
                    "author": "pavel",
                    "rating": 5,
                    "text": "Уже третья карта отсюда. Качество как всегда на высоте! Документы все ок, активация мгновенная. Продавец красавчик",
                    "date": "2025-04-28"
          }
]
    },
    {
        id: 210,
        name: "Предоплаченная Visa Virtual 100 € (EU)",
        price: 2000,
        category: "prepaid",
        image: "images/products/visa-prepaid-virtual-100-eur.webp",
        description: "Когда необходимо срочно оплатить покупку в европейском интернет-магазине, либо западном онлайн-сервисе, а ваше карта не принимается - простейшим решением будет заказать у нас предоплаченную банковскую карту в валюте Евро. Банком-эмитентом виртуальной банковской карты Visa является известный французский банк (FR). Это не физическая банковская карта, мы продаем именно виртуальную карту с балансом в 100 евро на счёте.",
        images: ["images/products/visa-prepaid-virtual-100-eur.webp", "images/products/visa-prepaid-virtual-100-eur2.webp"],
        reviews: []
    },
    {
        id: 211,
        name: "Предоплаченная Mastercard Virtual 100 $ (US)",
        price: 2000,
        category: "prepaid",
        image: "images/products/mastercard-prepaid-virtual-100-usd.webp",
        description: "Когда необходимо срочно оплатить покупку в американском интернет-магазине, либо западном онлайн-сервисе, а ваше карта не принимается - простейшим решением будет заказать у нас предоплаченную банковскую карту в валюте Доллар США. Банком-эмитентом виртуальной банковской карты Mastercard является известный американский банк (US). Это не физическая банковская карта, мы продаем именно виртуальную карту с балансом в 100 долларов на счёте.",
        images: ["images/products/mastercard-prepaid-virtual-100-usd.webp", "images/products/mastercard-prepaid-virtual-100-usd2.webp"],
        reviews: [
          {
                    "author": "Дима",
                    "rating": 5,
                    "text": "Приобретал виртуальную карту для оплаты подписок. Получил данные карты в течение часа после оплаты. Активация прошла без проблем, платежи проходят успешно.",
                    "date": "2026-06-19"
          }
]
    },
    {
        id: 212,
        name: "Аккаунт Макс",
        price: 900,
        category: "accounts",
        image: "images/products/max-account.webp",
        description: "Купить аккаунт мессенджера MAX легко, оставьте заявку, оплатите любым удобным способом и пользуйтесь по-МАКСимуму. Покупайте аккаунт мессенджера Макс прямо сейчас, без ограничений и лимитов общайтесь с родными и друзьями, оставаясь совершенно анонимным! Функция «Цифровой ID» работает на аккаунте, профиль зарегистрирован на российскую СИМ-карту Мегафон/МТС. Доступ к сим-карте через онлайн-панель управления, все симки верифицированы и работают без ограничений, также как и аккаунт мессенджера. Вы можете войти в аккаунт на любом устройстве и получать СМС для подтверждения 24/7.",
        images: [
            "images/products/max-account.webp",
            "images/products/max-account2.webp"
        ],
        reviews: [
          {
                    "author": "5231512",
                    "rating": 5,
                    "text": "Аккаунт прислали уложились в сроки. Отличный сайт спасибо.",
                    "date": "2026-08-31"
          },
          {
                    "author": "АВ",
                    "rating": 5,
                    "text": "Купили шесть аккаунтов макса на весь отдел. На работе выдали смарты и сказали ставить макс самим. Поставили собственно ))",
                    "date": "2026-07-05"
          },
          {
                    "author": "Licon",
                    "rating": 5,
                    "text": "Приобрел себе один аккаунт Max, авторизовался нормально, Смс пришло быстро очень классный кстати сервис для смсэк идет в комплекте не знал о нем). Взял для себя так как остался без русской симки а с другой не удается зарегиться...",
                    "date": "2026-05-17"
          },
          {
                    "author": "Андрей",
                    "rating": 5,
                    "text": "Привет. Купил Макса, у меня он привязан к МТС. Дали доступ к панельке управления смсками номера. Попробовал на него регнуть даже Вк, прошла регистрация. Зашел в личный кабинет мтс с ним, регистрация сделана никаких ограничений на симке нет. Все серьёзно крч.",
                    "date": "2026-02-24"
          }
]
    },
    {
        id: 213,
        name: "Электронный кошелёк Qplus",
        price: 1500,
        category: "ewallet",
        image: "images/products/qplus-wallet.webp",
        description: "Покупайте Qplus кошелёк - электронный кошелёк для оплаты рублями и денежных переводов по миру. Продаем кошелек Qplus идентифицированный со статусом ПЛЮС. Пользуйтесь счётом Qplus, выпускайте виртуальную банковскую карту для международных платежей и оставайтесь анонимным, электронный кошелек оформлен на реальные документы, верификация осуществлена через сотового оператора, привязан к SIM карте российского оператора МТС. Доступ к панели управления сим-картой предоставляется вместе с кошельком без ограничений. На один паспорт и одну SIM карту открыт только один кошелёк, вы единственный владелец счёта.\n\nКупите Qplus кошелёк сейчас и получите бесплатный апгрейд до статуса \"ПРО\" сразу, как только он станет доступен (в первой половине 2026 года)! Воспользуйтесь выгодным предложением, цена на кошелёк будет повышена после открытия верификации до \"ПРО\" статуса.",
        images: ["images/products/qplus-wallet.webp", "images/products/qplus-wallet2.webp"],
        reviews: [
          {
                    "author": "Илья",
                    "rating": 5,
                    "text": "Спасибо за скорость. Оформил заказ на кошелек, битком проплатил, через полтора часа пришли явки пароли. Пока тестирую, в кабинете написано статус Плюс, соответствует заявленому, пока только пополнил свой телефон- дошло, завтра буду разбиратся как платить в стиме. Сам кошель пока лагает, видно не давно запустились и пока не доработали все.",
                    "date": "2026-03-06"
          }
]
    },
    {
        id: 220,
        name: "Аккаунт Авито",
        price: 850,
        category: "accounts",
        image: "images/products/avito-account.webp",
        description: "Купить аккаунт Авито — готовый верифицированный аккаунт сервиса объявлений Авито. Аккаунт зарегистрирован на российскую СИМ-карту Мегафон/МТС. Доступ к СМС 24/7.",
        images: ["images/products/avito-account.webp", "images/products/avito-account2.webp"],
        reviews: [
          {
                    "author": "YanSok888",
                    "rating": 5,
                    "text": "Взял аккаунт Авито, всё работает отлично. Авторизовался без проблем.",
                    "date": "2026-05-15"
          }
]
    },
    {
        id: 221,
        name: "Аккаунт Авито с отзывами",
        price: 1000,
        category: "accounts",
        image: "images/products/avito-account-with-reviews.webp",
        description: "Купить аккаунт Авито с отзывами — готовый верифицированный аккаунт сервиса Авито с положительной историей и отзывами. Аккаунт зарегистрирован на российскую СИМ-карту Мегафон/МТС. Доступ к СМС 24/7.",
        images: ["images/products/avito-account-with-reviews.webp", "images/products/avito-account-with-reviews2.webp"],
        reviews: [
          {
                    "author": "cc",
                    "rating": 5,
                    "text": "Отзывы на акке реальные. Пока полет нормальный, не блочат, повторную верификацию не запрашивают",
                    "date": "2026-04-28"
          }
]
    },

    {
        id: 224,
        name: "Аккаунт Ebay",
        price: 1000,
        category: "accounts",
        image: "images/products/ebay-account.webp",
        description: "Купить аккаунт Ebay — полностью верифицированный аккаунт всемирно известного маркетплейса Ebay. Аккаунт готов к совершению покупок и продаж, привязан к чистой электронной почте. Доступ к СМС 24/7.",
        images: ["images/products/ebay-account.webp", "images/products/ebay-account2.webp"],
        reviews: [
          {
                    "author": "Тягач",
                    "rating": 5,
                    "text": "Купил аккаунт Ebay для покупок за рубежом. Всё пришло мгновенно, авторизовался без проблем. Аккаунт чистый, уже совершил первую покупку.",
                    "date": "2026-02-05"
          }
]
    },
    {
        id: 225,
        name: "Аккаунт Amazon",
        price: 1200,
        category: "accounts",
        image: "images/products/amazon-account.webp",
        description: "Купить аккаунт Amazon — готовый к использованию аккаунт крупнейшего онлайн-ритейлера Amazon. Верифицирован и готов к шоппингу по всему миру. Доступ к СМС 24/7.",
        images: ["images/products/amazon-account.webp", "images/products/amazon-account2.webp"],
        reviews: [
          {
                    "author": "Стэн",
                    "rating": 5,
                    "text": "Купил аккаунт Amazon для заказа электроники. Всё пришло быстро, аккаунт рабочий, без ограничений.",
                    "date": "2026-03-19"
          }
]
    },
    {
        id: 226,
        name: "Аккаунт WeChat",
        price: 500,
        category: "accounts",
        image: "images/products/wechat-account.webp",
        description: "Купить аккаунт WeChat — верифицированный аккаунт популярного мессенджера WeChat. Пройдены все необходимые проверки, аккаунт готов к обмену сообщениями и использованию встроенных сервисов. Доступ к СМС 24/7.",
        images: ["images/products/wechat-account.webp", "images/products/wechat-account2.webp"],
        reviews: [
          {
                    "author": "pvp",
                    "rating": 5,
                    "text": "А что еще делать, все заблочено, пользуемся теперь высококлассным китайским продуктом",
                    "date": "2026-06-10"
          }
]
    },
    {
        id: 227,
        name: "Аккаунт ГосУслуги",
        price: 500,
        category: "accounts",
        image: "images/products/gosuslugi-account.webp",
        description: "Купить аккаунт ГосУслуги — верифицированный аккаунт государственного портала с подтвержденной личностью. Полный доступ ко всем государственным сервисам, получение справок и документов в электронном виде.",
        images: ["images/products/gosuslugi-account.webp", "images/products/gosuslugi-account2.webp"],
        reviews: [
          {
                    "author": "Дмитрий",
                    "rating": 5,
                    "text": "Все данные на месте, документы тоже скинули как и договаривались",
                    "date": "2026-06-10"
          }
]
    },
    {
        id: 228,
        name: "Аккаунт GitHub Copilot Pro 1 месяц",
        price: 700,
        category: "accounts",
        image: "images/products/cop.webp",
        description: "GitHub Copilot — Премиум AI-помощник для программирования на 1 месяц (Личный доступ). Аккаунт GitHub Copilot Pro с полным доступом к функциям.",
        images: ["images/products/cop.webp", "images/products/cop2.webp"],
        reviews: [
          {
                    "author": "AI",
                    "rating": 5,
                    "text": "Уже постоянно беру у этого продавца. Моментально выдаётся!",
                    "date": "2026-06-20"
          },
          {
                    "author": "Ральф",
                    "rating": 5,
                    "text": "Все получилось, инструкция простая и понятная. Рекомендую.",
                    "date": "2026-05-22"
          },
          {
                    "author": "jlk",
                    "rating": 5,
                    "text": "Работает",
                    "date": "2026-04-03"
          }
]
    },
    {
        id: 229,
        name: "Аккаунт GitHub Copilot Pro+ 1 месяц",
        price: 1600,
        category: "accounts",
        image: "images/products/cop.webp",
        description: "GitHub Copilot Pro+ — Расширенный премиум AI-помощник для программирования на 1 месяц (Личный доступ). Аккаунт GitHub Copilot Pro+ с полным доступом к функциям.",
        images: ["images/products/cop.webp", "images/products/cop2.webp"],
        reviews: [
          {
                    "author": "Jersy",
                    "rating": 5,
                    "text": "Продавец, хорош. Все быстро, неделя аккаунту, полет нормальный",
                    "date": "2026-07-04"
          }
]
    },
    {
        id: 230,
        name: "Аккаунт GitHub Copilot Max 1 месяц",
        price: 3000,
        category: "accounts",
        image: "images/products/cop.webp",
        description: "GitHub Copilot Max — Максимальный премиум AI-помощник для программирования на 1 месяц (Личный доступ). Приоритетный доступ к новым моделям, ежемесячные кредиты $200.",
        images: ["images/products/cop.webp", "images/products/cop2.webp"],
        reviews: [
          {
                    "author": "4124",
                    "rating": 5,
                    "text": "Взял Copilot Max — разница с Pro+ колоссальная. Доступ к новым моделям работает. Доставка мгновенная, всё чётко!",
                    "date": "2026-04-05"
          }
]
    },
    {
        id: 231,
        name: "Аккаунт Claude AI Pro 1 месяц",
        price: 800,
        category: "accounts",
        image: "images/products/claude.webp",
        description: "Аккаунт Claude AI Pro на 1 месяц. Доступ к Claude Opus 4.7, Claude Sonnet 4.7, Claude Code. Увеличенные лимиты 5X, контекст до 200K токенов.",
        images: ["images/products/claude.webp", "images/products/claude2.webp"],
        reviews: [
          {
                    "author": "Дэн",
                    "rating": 5,
                    "text": "Покупаю второй раз. Пока проблем не возникало. Все отлично!",
                    "date": "2026-06-16"
          },
          {
                    "author": "ARCHIBALD",
                    "rating": 5,
                    "text": "Все отлично, доставили в течение минуты",
                    "date": "2026-03-12"
          }
]
    },
    {
        id: 232,
        name: "Аккаунт Claude AI Max 1 месяц",
        price: 3000,
        category: "accounts",
        image: "images/products/claude.webp",
        description: "Аккаунт Claude AI Max на 1 месяц. В 5 или 20 раз больший объём использования, приоритетный доступ в часы пиковой нагрузки, ранний доступ к расширенным функциям Claude.",
        images: ["images/products/claude.webp", "images/products/claude2.webp"],
        reviews: [
          {
                    "author": "kit1978",
                    "rating": 5,
                    "text": "Работаю с этим продавцом с апреля. Всё стабильно, быстро и хорошо. Будем работать дальше.",
                    "date": "2026-06-29"
          }
]
    },
    {
        id: 240,
        name: "Аккаунт GTA 6 Ultimate Edition PS (Турция)",
        price: 1500,
        category: "accounts",
        image: "images/products/gta6.webp",
        description: "Аккаунт GTA 6 Ultimate Edition PS (Турция) с полным доступом, готовый к игре. Подходит для пользователей, которым нужен готовый аккаунт с корректной настройкой и доступом.",
        images: ["images/products/gta6.webp", "images/products/gta6v1.webp"],
        reviews: [
          {
                    "author": "Sabrina1425",
                    "rating": 5,
                    "text": "Быстро легенда",
                    "date": "2026-08-17"
          },
          {
                    "author": "Samnnov",
                    "rating": 5,
                    "text": "Относительно быстро, выдали акк, проблем нет",
                    "date": "2026-08-05"
          },
          {
                    "author": "ununuc",
                    "rating": 5,
                    "text": "all good )",
                    "date": "2026-07-29"
          }
]
    },
    {
        id: 241,
        name: "Аккаунт GTA 6 Ultimate Edition XBOX (Турция)",
        price: 1500,
        category: "accounts",
        image: "images/products/gta6.webp",
        description: "Аккаунт GTA 6 Ultimate Edition XBOX (Турция) с полным доступом, готовый к игре. Подходит для пользователей, которым нужен рабочий аккаунт на Xbox с доступом к игре.",
        images: ["images/products/gta6.webp", "images/products/gta6v2.webp"],
        reviews: [
          {
                    "author": "SinisterMarkkkk",
                    "rating": 5,
                    "text": "Супер быстро",
                    "date": "2026-08-12"
          },
          {
                    "author": "R99",
                    "rating": 5,
                    "text": "Все отлично, осталось 126 дней!",
                    "date": "2026-07-16"
          }
]
    },
    {
        id: 233,
        name: "Аккаунт Fortnite 300+ скинов",
        price: 900,
        category: "accounts",
        image: "images/products/fort.webp",
        description: "Аккаунт Fortnite, более 300 скинов, полный доступ по электронной почте + скины из боевого пропуска и событий.",
        images: ["images/products/fort.webp", "images/products/fort2.webp"],
        reviews: [
          {
                    "author": "Praimfreak",
                    "rating": 5,
                    "text": "Имба честно говоря просто",
                    "date": "2026-04-08"
          }
]
    },
    {
        id: 234,
        name: "Старый Аккаунт FACEBOOK 2016-2020",
        price: 400,
        category: "accounts",
        image: "images/products/face.webp",
        description: "СТАРЫЙ АККАУНТ FACEBOOK 2016-2020. Руководство прилагается к покупке. Формат аккаунта = Username:Password:MailEmail:MailPassword. Доступ к почте (можно войти в почту). Гарантия 14 дней после покупки.",
        images: ["images/products/face.webp", "images/products/face2.webp"],
        reviews: [
          {
                    "author": "RoBert14",
                    "rating": 5,
                    "text": "фух всё прошло успешно, в акк зашло",
                    "date": "2026-06-01"
          },
          {
                    "author": "СодаНе",
                    "rating": 5,
                    "text": "Все данные пришли быстро. Зашёл без проблем.",
                    "date": "2026-03-27"
          },
          {
                    "author": "Raijin10",
                    "rating": 5,
                    "text": "Инструкция понятная, аккаунт чистый, спасибо продавцу :-3",
                    "date": "2026-02-13"
          }
]
    },
    {
        id: 235,
        name: "Старый Аккаунт X(Twitter) 2008 по 2014",
        price: 450,
        category: "accounts",
        image: "images/products/x.webp",
        description: "Регистрация с 2008 по 2014 год. Формат аккаунта = TwitterUsername:Password:MailEmail:MailPassword. Доступ к почте (можно войти в почту). Руководство по использованию аккаунта. Гарантия 14 дней после покупки.",
        images: ["images/products/x.webp", "images/products/x2.webp"],
        reviews: [
          {
                    "author": "Феликс",
                    "rating": 5,
                    "text": "Аккаунт старый, доступ к почте был, формат точь-в-точь как обещали. Всё рабочее.",
                    "date": "2026-07-14"
          }
]
    },
    {
        id: 236,
        name: "Аккаунт Google США | Gmail 2020 (6 лет) | Личный",
        price: 350,
        category: "accounts",
        image: "images/products/gm.webp",
        description: "Личный аккаунт Gmail 2020 года регистрации. Возраст аккаунта - 6 лет. Постоянный доступ к аккаунту. Подходит для работы, AI-сервисов и повседневного использования. Можно использовать для YouTube, Google AI Studio, Gemini и других сервисов Google. Аккаунт проверен перед продажей. Удобный формат выдачи: Gmail + Пароль + 2FA.",
        images: ["images/products/gm.webp", "images/products/gm2.webp"],
        reviews: [
          {
                    "author": "Яндекс",
                    "rating": 5,
                    "text": "доволен покупкой",
                    "date": "2026-04-18"
          },
          {
                    "author": "Don",
                    "rating": 5,
                    "text": "Понятная инструкция и моментальное получение доступа, спасибо!",
                    "date": "2025-10-06"
          }
]
    },
    {
        id: 237,
        name: "Аккаунт Reddit с кармой 1000+ (глобальный)",
        price: 700,
        category: "accounts",
        image: "images/products/reddit.webp",
        description: "Зарегистрирован с использованием премиальных резидентских IP-адресов США / Великобритании / ЕС. Идеально подходит для криптовалюты, OF, NSFW, IT, маркетинга и универсального использования. Карма: 1,000+ (смешанная карма постов и комментариев). Возраст аккаунта: от 1 дня до 12 лет (будет отправлен аккаунт более старого возраста). Формат предоставления: username:password:ip.",
        images: ["images/products/reddit.webp", "images/products/reddit2.webp"],
        reviews: [
          {
                    "author": "Fffggfccffd3",
                    "rating": 5,
                    "text": "Для раскрутки и перелива трафика идеально",
                    "date": "2026-05-14"
          }
]
    },
    {
        id: 301,
        name: "NordVPN Premium Complete Аккаунт | 1 Год",
        price: 1000,
        category: "vpnproxy",
        image: "images/products/vpn.webp",
        description: "Срок действия: 1 год (гарантия 365 дней). Индивидуальный аккаунт с полным доступом и мгновенной выдачей. 6400+ серверов в 111 странах, AES 256-бит, Threat Protection, no-logs и поддержка Windows, Mac, Android, iOS, Linux, Firestick и Smart TV.",
        images: ["images/products/vpn.webp", "images/products/vpn2.webp"],
        reviews: [
          {
                    "author": "Fedor19483022474",
                    "rating": 5,
                    "text": "работает",
                    "date": "2026-03-15"
          }
]
    },
    {
        id: 302,
        name: "Индивидуальные Прокси",
        price: 500,
        category: "vpnproxy",
        image: "images/products/proxy.webp",
        description: "Чистые индивидуальные прокси (IPv4/IPv6) для любых задач. Высокая скорость и стабильность работы.",
        images: ["images/products/proxy.webp", "images/products/proxy2.webp"],
        reviews: []
    },
    {
        id: 75,
        name: "Аккаунт OnlyFans + баланс 400$-800$",
        price: 1500,
        category: "accounts",
        image: "images/products/onlyf.webp",
        description: "Аккаунт OnlyFans + баланс 400$-800$. Могу ли я использовать баланс для подписки и чаевых моделям? Да, вы можете оставлять чаевые и оформлять подписку на любую понравившуюся вам модель на любую сумму. Вы можете использовать баланс своего счета или кредитную карту, привязанную к аккаунту. Могу ли я вывести баланс? Да, вы без проблем сможете вывести весь баланс аккаунта на свои счета: в криптовалюту, paypal или любую другую карту.",
        images: ["images/products/onlyf.webp", "images/products/onlyf2.webp"],
        reviews: [
          {
                    "author": "Том",
                    "rating": 5,
                    "text": "Отлично, моя вторая покупка.",
                    "date": "2026-06-20"
          }
]
    },
    {
        id: 214,
        name: "Минусовый Аккаунт Pari (300,000₽ - 350,000₽)",
        price: 2000,
        category: "accounts",
        page: "pari-account.html",
        image: "images/products/pari.webp",
        description: "Аккаунт Pari с верификацией, документами и полным доступом. Перед продажей аккаунт проходит ручную проверку, а после покупки вы получаете все данные на указанный контакт.",
        images: ["images/products/pari.webp", "images/products/pari2.webp"],
        reviews: [
          {
                    "author": "Nikita K.",
                    "rating": 5,
                    "text": "Отличный продавец, можно доверять, покупал 3 аккаунта, проблем никаких не было, все четко би быстро",
                    "date": "2026-08-02"
          },
          {
                    "author": "Egor A.",
                    "rating": 5,
                    "text": "Получил акк, фул комплект, с доками, все как надо. Рекомендую",
                    "date": "2026-07-22"
          },
          {
                    "author": "Fadeev1999",
                    "rating": 5,
                    "text": "Все отлично",
                    "date": "2026-06-17"
          }
]
    },
    {
        id: 215,
        name: "Минусовый Аккаунт BetBoom (320,000₽ - 400,000₽)",
        price: 2000,
        category: "accounts",
        page: "betboom-account.html",
        image: "images/products/boom.webp",
        description: "Аккаунт BetBoom с верификацией, документами и полным доступом. Перед продажей аккаунт проходит ручную проверку, а после покупки вы получаете все данные на указанный контакт.",
        images: ["images/products/boom.webp", "images/products/boom2.webp"],
        reviews: [
          {
                    "author": "Taron K.",
                    "rating": 5,
                    "text": "Огромное спасибо шопу, все показали и рассказали",
                    "date": "2026-06-25"
          }
]
    },
    {
        id: 216,
        name: "Минусовый Аккаунт Лига Ставок (350,000₽ - 400,000₽)",
        price: 2200,
        category: "accounts",
        page: "liga-account.html",
        image: "images/products/liga.webp",
        description: "Аккаунт Лига с верификацией, документами и полным доступом. Перед продажей аккаунт проходит ручную проверку, а после покупки вы получаете все данные на указанный контакт.",
        images: [
            "images/products/liga.webp",
            "images/products/liga2.webp"
        ],
        reviews: [
          {
                    "author": "david33",
                    "rating": 5,
                    "text": "Топчик, получил аккаунт, буду брать еще",
                    "date": "2026-05-12"
          }
]
    },
    {
        id: 217,
        name: "Минусовый Аккаунт Fonbet (400,000₽ - 450,000₽)",
        price: 2400,
        category: "accounts",
        page: "fonbet-account.html",
        image: "images/products/fonbet.webp",
        description: "Аккаунт Fonbet с верификацией, документами и полным доступом. Перед продажей аккаунт проходит ручную проверку, а после покупки вы получаете все данные на указанный контакт.",
        images: ["images/products/fonbet.webp", "images/products/fonbet2.webp"],
        reviews: [
          {
                    "author": "akas777",
                    "rating": 5,
                    "text": "Получил акк, полное соответствие описанию. Спасибо",
                    "date": "2026-08-10"
          },
          {
                    "author": "Romas14",
                    "rating": 5,
                    "text": "Самый адекватный шоп по ценам, быстро и без лишних разговоров",
                    "date": "2026-05-30"
          }
]
    },
    {
        id: 218,
        name: "Минусовый Аккаунт Winline (300,000₽ – 350,000₽)",
        price: 2000,
        category: "accounts",
        page: "winline-account.html",
        image: "images/products/win.webp",
        description: "Аккаунт Winline с верификацией, документами и полным доступом. Перед продажей аккаунт проходит ручную проверку, а после покупки вы получаете все данные на указанный контакт.",
        images: ["images/products/win.webp", "images/products/win2.webp"],
        reviews: [
          {
                    "author": "Eggis1337",
                    "rating": 5,
                    "text": "Акк отработал на ура, проблем за это время никаких не было",
                    "date": "2026-08-06"
          },
          {
                    "author": "George K.",
                    "rating": 5,
                    "text": "Отличный шоп, где вы были раньше))",
                    "date": "2026-07-20"
          }
]
    },
    {
        id: 219,
        name: "Минусовый Аккаунт Marathon (250,000₽ - 300,000₽)",
        price: 1800,
        category: "accounts",
        page: "marathon-account.html",
        image: "images/products/marafon.webp",
        description: "Аккаунт Marathon с верификацией, документами и полным доступом. Перед продажей аккаунт проходит ручную проверку, а после покупки вы получаете все данные на указанный контакт.",
        images: ["images/products/marafon.webp", "images/products/marafon2.webp"],
        reviews: []
    },
    {
        id: 238,
        name: "Минусовый Аккаунт 1Xbet (450,000₽ - 500,000₽)",
        price: 2500,
        category: "accounts",
        page: "1xbet-account.html",
        image: "images/products/1xbet.webp",
        description: "Аккаунт 1Xbet с верификацией, документами и полным доступом. Перед продажей аккаунт проходит ручную проверку, а после покупки вы получаете все данные на указанный контакт.",
        images: ["images/products/1xbet.webp", "images/products/1xbet2.webp"],
        reviews: [
          {
                    "author": "Fillikov D.",
                    "rating": 5,
                    "text": "Брал несколько верифнутых акков. Акки получил. Все отлично, однозначно рекомендую данный шоп",
                    "date": "2026-08-09"
          },
          {
                    "author": "Ali",
                    "rating": 5,
                    "text": "Рекомендую. Все отлично",
                    "date": "2026-07-02"
          }
]
    },
    {
        id: 239,
        name: "Верифицированный Stake Аккаунт",
        price: 1500,
        category: "accounts",
        page: "stake-account.html",
        image: "images/products/stake.webp",
        description: "Верифицированный аккаунт Stake с подтвержденной верификацией, документами и полным доступом. Перед продажей аккаунт проходит ручную проверку, а после покупки вы получаете все данные на указанный контакт.",
        images: ["images/products/stake.webp", "images/products/stake2.webp"],
        reviews: [
          {
                    "author": "Rodion328",
                    "rating": 5,
                    "text": "Продавец красава, все быстро, четко, без всяких проблем",
                    "date": "2026-07-11"
          }
]
    }
];

function getUniqueProductReviews(reviews) {
    if (!Array.isArray(reviews)) return [];

    const seenReviews = new Set();
    return reviews.filter(review => {
        const reviewKey = JSON.stringify([
            review.author,
            review.rating,
            review.text,
            review.date
        ]);

        if (seenReviews.has(reviewKey)) return false;

        seenReviews.add(reviewKey);
        return true;
    });
}

products.forEach(product => {
    product.reviews = getUniqueProductReviews(product.reviews);
});


let currentCategory = 'all';
let currentSort = 'default';
let currentPage = 1;
let itemsPerPage = 20;
let loadMoreMode = false;


document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const savedState = sessionStorage.getItem('catalogState');
    let savedScrollPosition = null;
    let savedLoadMoreMode = false;
    let savedPage = 1;

    // Проверяем, есть ли URL-параметры (приоритет над savedState)
    const hasUrlCategory = urlParams.has('category');
    const hasUrlSearch = urlParams.has('search');
    const hasUrlPage = urlParams.has('page');

    if (savedState && !hasUrlCategory && !hasUrlSearch && !hasUrlPage) {
        try {
            const catalogState = JSON.parse(savedState);

            if (window.location.pathname.includes('catalog.html') || window.location.pathname.endsWith('/')) {
                savedPage = catalogState.page || 1;
                currentCategory = catalogState.category || 'all';
                currentSort = catalogState.sort || 'default';
                savedScrollPosition = catalogState.scrollPosition || null;
                savedLoadMoreMode = catalogState.loadMoreMode || false;

                if (catalogState.search && typeof window.setSearchQuery === 'function') {
                    window.setSearchQuery(catalogState.search);
                }

                const url = new URL(window.location);
                if (catalogState.category && catalogState.category !== 'all') {
                    url.searchParams.set('category', catalogState.category);
                }
                if (catalogState.search) {
                    url.searchParams.set('search', catalogState.search);
                }
                if (catalogState.page && catalogState.page > 1) {
                    url.searchParams.set('page', catalogState.page);
                }

                window.history.replaceState({}, '', url);

                const sortSelect = document.getElementById('sortSelect');
                if (sortSelect) {
                    sortSelect.value = currentSort;
                }

                sessionStorage.removeItem('catalogState');
            }
        } catch (e) {
        }
    } else {
        // Очищаем savedState если есть URL параметры
        if (savedState && (hasUrlCategory || hasUrlSearch || hasUrlPage)) {
            sessionStorage.removeItem('catalogState');
        }

        let urlCategory = urlParams.get('category') || 'all';

        const categoryMapping = {
            'debit-cards': 'debit',
            'prepaid-cards': 'prepaid',
            'e-wallets': 'ewallet',
            'debit': 'debit',
            'prepaid': 'prepaid',
            'ewallet': 'ewallet',
            'accounts': 'accounts',
            'bankaccounts': 'Банковские аккаунты',
        'all': 'all'
        };

        currentCategory = categoryMapping[urlCategory] || urlCategory;

        const urlPage = parseInt(urlParams.get('page')) || 1;
        currentPage = urlPage;

        const urlSearch = urlParams.get('search');
        if (urlSearch && typeof window.setSearchQuery === 'function') {
            window.setSearchQuery(urlSearch);

            const searchInputs = [
                document.getElementById('catalogDesktopSearchInput'),
                document.getElementById('catalogMobileSearchInput')
            ];
            searchInputs.forEach(input => {
                if (input) {
                    input.value = urlSearch;
                }
            });
        }
    }

    const sortSelect = document.getElementById('sortSelect');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (sortSelect) {
        sortSelect.addEventListener('change', handleSortChange);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }

    if (savedLoadMoreMode && savedPage > 1) {
        loadMoreMode = true;
        currentPage = 1;
        loadProducts();
        for (let i = 2; i <= savedPage; i++) {
            currentPage = i;
            loadProducts();
        }
    } else {
        currentPage = savedPage;
        loadProducts();
    }

    updateCategoryTitle();

    updateCartBadge();
    updateFavoritesBadge();

    initializeCartButtonStates();

    if (savedScrollPosition !== null) {
        setTimeout(() => {
            window.scrollTo(0, savedScrollPosition);
        }, 100);
    }
});


function updateCategoryTitle() {
    const categoryTitle = document.getElementById('categoryTitle');

    if (!categoryTitle) return;

    const titles = {
        'bankaccounts': 'Банковские аккаунты',
        'all': 'Все товары',
        'debit': 'Банковские карты',
        'prepaid': 'Предоплаченные карты',
        'ewallet': 'Электронные кошельки',
        'accounts': 'Аккаунты',
        'vpnproxy': 'Программы'
    };

    const categoryName = titles[currentCategory] || 'Все товары';

    const currentSearchQuery = getCurrentSearchQuery();
    if (currentSearchQuery && currentSearchQuery.trim() !== '') {
        if (currentCategory === 'all') {
            categoryTitle.textContent = `Поиск: "${currentSearchQuery}"`;
        } else {
            categoryTitle.textContent = `Поиск в "${categoryName}": "${currentSearchQuery}"`;
        }
    } else {

        categoryTitle.textContent = categoryName;
    }
}


function handleSortChange(event) {
    currentSort = event.target.value;
    currentPage = 1;
    loadProducts();
}


function filterProducts() {
    let filteredProducts = products;

    const currentSearchQuery = getCurrentSearchQuery();
    if (currentSearchQuery && currentSearchQuery.trim() !== '') {
        const searchFunction = (typeof window !== 'undefined' && window.searchProducts) ? window.searchProducts : null;
        if (searchFunction) {
            filteredProducts = searchFunction(currentSearchQuery);
        }
    }


    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }

    return filteredProducts;
}


function sortProducts(products) {
    const sorted = [...products];

    switch (currentSort) {
        case 'name-asc':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return sorted.sort((a, b) => b.name.localeCompare(a.name));
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        default:
            return sorted;
    }
}


function calculateAverageRating(reviews) {
    const uniqueReviews = getUniqueProductReviews(reviews);
    if (uniqueReviews.length === 0) return 0;
    const totalRating = uniqueReviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round(totalRating / uniqueReviews.length * 10) / 10;
}

function createStarsHTML(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="bi bi-star-fill text-warning"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="bi bi-star-half text-warning"></i>';
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
        starsHTML += '<i class="bi bi-star text-warning"></i>';
    }

    return starsHTML;
}

function createProductHTML(product) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some(f => f.id === product.id);
    const favoriteClass = isFavorite ? 'btn-favorite-active' : '';
    const favoriteIcon = isFavorite ? 'bi-heart-fill' : 'bi-heart';

    const isInCart = isProductInCart(product.id);
    const cartButtonClass = isInCart ? 'btn btn-primary btn-sm btn-added-to-cart' : 'btn btn-primary btn-sm';
    const cartButtonText = isInCart ? '<i class="bi bi-check-circle"></i> Добавлено' : '<i class="bi bi-cart-plus"></i> В корзину';

    const averageRating = calculateAverageRating(product.reviews);
    const starsHTML = createStarsHTML(averageRating);
    const reviewsCount = getUniqueProductReviews(product.reviews).length;
    const ratingText = reviewsCount > 0 ? `${averageRating}/5 (${reviewsCount})` : 'Нет отзывов';

    return `
        <div class="product-card card" onclick="openProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="card-img-top" 
                 onerror="this.src='images/placeholder.svg';" loading="lazy">
            <div class="card-body">
                <h5 class="product-title">${product.name}</h5>
                <div class="product-price">${product.price.toLocaleString()}₽</div>
                
                <div class="product-rating-section">
                    <div class="product-rating">
                        <div class="d-flex align-items-center">
                            ${starsHTML}
                            <span class="ms-2 text-muted rating-text">${ratingText}</span>
                        </div>
                    </div>
                    
                    <div class="product-status">
                        <span class="badge bg-success">В наличии</span>
                    </div>
                </div>
                
                <div class="d-flex gap-2">
                    <button class="${cartButtonClass}" onclick="event.stopPropagation(); addToCart(${product.id})">
                        ${cartButtonText}
                    </button>
                    <button class="btn btn-outline-light btn-sm btn-favorite-toggle ${favoriteClass}" 
                            onclick="event.stopPropagation(); toggleFavorite(${product.id}, this)"
                            data-product-id="${product.id}">
                        <i class="${favoriteIcon}"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function loadProducts() {
    const filteredProducts = filterProducts();
    const sortedProducts = sortProducts(filteredProducts);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = sortedProducts.slice(startIndex, endIndex);

    const productsGrid = document.getElementById('productsGrid');

    if (!productsGrid) {
        return;
    }

    if (loadMoreMode && currentPage > 1) {
        const newProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map(product => createProductHTML(product)).join('');
        productsGrid.insertAdjacentHTML('beforeend', newProducts);
    } else {
        productsGrid.innerHTML = productsToShow.map(product => createProductHTML(product)).join('');
    }

    setTimeout(() => {
        initializeCartButtonStates();
    }, 0);

    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (endIndex < sortedProducts.length) {
        loadMoreContainer.style.display = 'block';
        loadMoreMode = true;
    } else {
        loadMoreContainer.style.display = 'none';
        loadMoreMode = false;
    }

    createPagination(sortedProducts.length);
}

function loadMoreProducts() {
    currentPage++;
    loadProducts();
}

function createPagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pagination = document.getElementById('pagination');

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';

    if (currentPage > 1) {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link pagination-arrow" href="#" onclick="goToPage(${currentPage - 1})">
                    <i class="bi bi-chevron-left"></i>
                </a>
            </li>
        `;
    }

    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `
                <li class="page-item active">
                    <span class="page-link">${i}</span>
                </li>
            `;
        } else if (totalPages <= 7 || i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            paginationHTML += `
                <li class="page-item">
                    <a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>
                </li>
            `;
        } else if (totalPages > 7 && (i === currentPage - 3 || i === currentPage + 3)) {
            paginationHTML += `
                <li class="page-item disabled">
                    <span class="page-link">...</span>
                </li>
            `;
        }
    }

    if (currentPage < totalPages) {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link pagination-arrow" href="#" onclick="goToPage(${currentPage + 1})">
                    <i class="bi bi-chevron-right"></i>
                </a>
            </li>
        `;
    }

    pagination.innerHTML = paginationHTML;
}

function goToPage(page) {
    currentPage = page;
    loadMoreMode = false;

    const url = new URL(window.location);
    if (page > 1) {
        url.searchParams.set('page', page);
    } else {
        url.searchParams.delete('page');
    }
    window.history.pushState({}, '', url);

    loadProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openProduct(productId) {
    const productPages = {
        1: 'products/mastercard-ziraat.html',
        2: 'products/alfabank-bazovaya.html',
        3: 'products/yumoney-verified.html',
        4: 'products/paypal-verified.html',
        29: 'products/paypal-balance-500-1000.html',
        30: 'products/paypal-balance-1000-plus.html',
        5: 'products/qiwi-professional.html',
        7: 'products/ozon-bank-extended.html',
        8: 'products/mastercard-kaspi-gold.html',
        9: 'products/oldubil-verified.html',
        10: 'products/wise-verified.html',
        11: 'products/pyypl-verified.html',
        12: 'products/yandex-pay-maximum.html',
        16: 'products/revolut-verified.html',
        17: 'products/volet-advcash-verified.html',
        18: 'products/skrill-verified.html',
        19: 'products/bybit-verified.html',
        20: 'products/binance-verified.html',
        21: 'products/okx-verified.html',
        26: 'products/mexc-verified.html',
        214: 'products/pari-account.html',
        305: 'products/bybit-account-with-balance.html',
        27: 'products/bingx-verified.html',
        28: 'products/coinbase-verified.html',
        304: 'products/coinbase-account-with-balance.html',
        24: 'products/mastercard-rbs.html',
        25: 'products/mir-sberbank.html',
        102: 'products/vtb-platina.html',
        201: 'products/sberbank-gold.html',
        202: 'products/sberbank-perviy.html',
        205: 'products/tinkoff-black.html',
        210: 'products/visa-prepaid-virtual-100-eur.html',
        211: 'products/mastercard-prepaid-virtual-100-usd.html',
        212: 'products/max-account.html',
        213: 'products/qplus-wallet.html',
        215: 'products/betboom-account.html',
        216: 'products/liga-account.html',
        217: 'products/fonbet-account.html',
        218: 'products/winline-account.html',
        219: 'products/marathon-account.html',
        220: 'products/avito-account.html',
        221: 'products/avito-account-with-reviews.html',

        224: 'products/ebay-account.html',
        225: 'products/amazon-account.html',
        226: 'products/wechat-account.html',
        227: 'products/gosuslugi-account.html',
        228: 'products/github-copilot-pro.html',
        229: 'products/github-copilot-proplus.html',
        230: 'products/github-copilot-max.html',
        231: 'products/claude-ai-pro.html',
        232: 'products/claude-ai-max.html',
        233: 'products/fortnite-300-plus-skins.html',
        240: 'products/gta-6-ultimate-edition-ps-turkey.html',
        241: 'products/gta-6-ultimate-edition-xbox-turkey.html',
        234: 'products/facebook-old-2016-2020.html',
        235: 'products/x-twitter-old-2008-2014.html',
        236: 'products/google-usa-gmail-2020-6-years-personal.html',
        237: 'products/reddit-karma-1000-global.html',
        238: 'products/1xbet-account.html',
        239: 'products/stake-account.html',
        75: 'products/onlyf-account.html',
        214: 'products/pari-account.html',
        215: 'products/betboom-account.html',
        216: 'products/liga-account.html',
        217: 'products/fonbet-account.html',
        218: 'products/winline-account.html',
        219: 'products/marathon-account.html',
        303: 'products/binance-account-with-balance.html',
        301: 'products/vpn.html',
        302: 'products/proxy.html'
    };

    const catalogState = {
        page: currentPage,
        category: currentCategory,
        sort: currentSort,
        search: getCurrentSearchQuery(),
        scrollPosition: window.scrollY || window.pageYOffset,
        loadMoreMode: loadMoreMode
    };

    sessionStorage.setItem('catalogState', JSON.stringify(catalogState));

    const isProductPage = window.location.pathname.includes('/products/');
    const basePath = isProductPage ? '../' : '';

    const page = productPages[productId] || `products/product.html?id=${productId}`;
    window.location.href = basePath + page;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isAlreadyInCart = cart.some(item => item.id === productId);

        if (isAlreadyInCart) {
            removeFromCart(productId);
            return;
        }

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartBadge();

        updateCartButtonState(productId, true);

        window.dispatchEvent(new CustomEvent('cartChanged', {
            detail: { productId: productId, action: 'added', cart: cart }
        }));

        showNotification('Товар добавлен в корзину!');
    }
}

function isProductInCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.some(item => item.id === productId);
}

function updateCartButtonState(productId, isInCart) {

    const buttons = document.querySelectorAll(`[onclick*="addToCart(${productId})"]`);
    buttons.forEach(button => {
        if (isInCart) {
            button.classList.add('btn-added-to-cart');
            button.innerHTML = '<i class="bi bi-check-circle"></i> Добавлено';
        } else {
            button.classList.remove('btn-added-to-cart');
            button.innerHTML = '<i class="bi bi-cart-plus"></i> В корзину';
        }
    });
}

function initializeCartButtonStates() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartProductIds = cart.map(item => item.id);

    cartProductIds.forEach(productId => {
        updateCartButtonState(productId, true);
    });
}

function toggleFavorite(productId, buttonElement) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const existingIndex = favorites.findIndex(f => f.id === productId);

    if (existingIndex === -1) {

        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        buttonElement.classList.add('btn-favorite-active');
        const icon = buttonElement.querySelector('i');
        icon.className = 'bi bi-heart-fill';

        showNotification('Товар добавлен в избранное!');
    } else {

        favorites.splice(existingIndex, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        buttonElement.classList.remove('btn-favorite-active');
        const icon = buttonElement.querySelector('i');
        icon.className = 'bi bi-heart';

        showNotification('Товар удален из избранного!');
    }

    updateFavoritesBadge();
}

function addToFavorites(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (!favorites.find(f => f.id === productId)) {
            favorites.push(product);
            localStorage.setItem('favorites', JSON.stringify(favorites));

            updateFavoritesBadge();

            showNotification('Товар добавлен в избранное!');
        } else {
            showNotification('Товар уже в избранном!');
        }
    }
}

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const badges = document.querySelectorAll('.btn-cart .badge');
    badges.forEach(badge => {
        badge.textContent = cart.length;
    });
}

function updateFavoritesBadge() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const badges = document.querySelectorAll('.btn-favorites .badge');
    badges.forEach(badge => {
        badge.textContent = favorites.length;
    });
}

function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

window.getProductById = getProductById;
window.products = products;

function openFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    const content = document.getElementById('favoritesContent');

    if (modal && content) {
        renderFavorites();
        modal.classList.add('show');
        document.body.classList.add('modal-open');
    }
}

function closeFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
}

function openCartModal() {
    const modal = document.getElementById('cartModal');
    const content = document.getElementById('cartContent');

    if (modal && content) {
        renderCart();
        modal.classList.add('show');
        document.body.classList.add('modal-open');
    }
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
}

function renderFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const content = document.getElementById('favoritesContent');

    if (!content) return;

    if (favorites.length === 0) {
        content.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-heart text-muted"></i>
                <p>Ваш список избранного пуст</p>
                <small class="text-muted">Добавьте товары в избранное, чтобы не потерять их</small>
            </div>
        `;
        return;
    }

    const isProductPage = window.location.pathname.includes('/products/');
    const placeholderPath = isProductPage ? '../images/placeholder.svg' : 'images/placeholder.svg';

    content.innerHTML = favorites.map(product => {

        const title = product.title || product.name || 'Товар без названия';
        let image = product.image || 'images/placeholder.svg';

        if (isProductPage && !image.startsWith('../') && !image.startsWith('http')) {
            image = '../' + image;
        }

        const category = getCategoryName(product.category) || 'Товары';
        const price = formatPrice(product.price);

        return `
            <div class="modal-product-item" onclick="openProduct(${product.id})" style="cursor: pointer;">
                <img src="${image}" alt="${title}" class="modal-product-image" onerror="this.src='${placeholderPath}'">
                <div class="modal-product-info">
                    <div class="modal-product-category">${category}</div>
                    <div class="modal-product-title">${title}</div>
                    <div class="modal-product-price">${price}</div>
                </div>
                <div class="modal-product-actions">
                    <button class="remove-btn" onclick="event.stopPropagation(); removeFromFavorites('${product.id}')">
                        <i class="bi bi-trash"></i> Удалить
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const content = document.getElementById('cartContent');
    const totalElement = document.getElementById('cartTotal');
    const checkoutBtn = document.querySelector('.btn-checkout');

    if (!content) return;

    if (cart.length === 0) {
        content.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-cart text-muted"></i>
                <p>Ваша корзина пуста</p>
                <small class="text-muted">Добавьте товары в корзину для покупки</small>
            </div>
        `;
        if (totalElement) totalElement.textContent = '0 ₽';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    const groupedCart = cart.reduce((acc, item) => {
        const itemId = String(item.id);
        if (acc[itemId]) {
            acc[itemId].quantity += 1;
        } else {
            acc[itemId] = { ...item, quantity: 1 };
        }
        return acc;
    }, {});

    const cartItems = Object.values(groupedCart);

    const isProductPage = window.location.pathname.includes('/products/');
    const placeholderPath = isProductPage ? '../images/placeholder.svg' : 'images/placeholder.svg';

    content.innerHTML = cartItems.map(product => {

        const title = product.title || product.name || 'Товар без названия';
        let image = product.image || 'images/placeholder.svg';

        if (isProductPage && !image.startsWith('../') && !image.startsWith('http')) {
            image = '../' + image;
        }

        const category = getCategoryName(product.category) || 'Товары';
        const price = formatPrice(product.price);

        return `
            <div class="modal-product-item" onclick="openProduct(${product.id})" style="cursor: pointer;">
                <img src="${image}" alt="${title}" class="modal-product-image" onerror="this.src='${placeholderPath}'">
                <div class="modal-product-info">
                    <div class="modal-product-category">${category}</div>
                    <div class="modal-product-title">${title}</div>
                    <div class="modal-product-price">${price}</div>
                </div>
                <div class="modal-product-actions" onclick="event.stopPropagation();">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity('${product.id}', ${product.quantity - 1})" ${product.quantity <= 1 ? 'disabled' : ''}>
                            <i class="bi bi-dash"></i>
                        </button>
                        <input type="number" class="quantity-input" value="${product.quantity}" min="1" max="99" 
                               onchange="updateCartQuantity('${product.id}', parseInt(this.value))" readonly>
                        <button class="quantity-btn" onclick="updateCartQuantity('${product.id}', ${product.quantity + 1})" ${product.quantity >= 99 ? 'disabled' : ''}>
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart('${product.id}')">
                        <i class="bi bi-trash"></i> Удалить
                    </button>
                </div>
            </div>
        `;
    }).join('');

    const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price) || 0;
        return sum + (price * item.quantity);
    }, 0);

    if (totalElement) totalElement.textContent = `${total.toFixed(0)} ₽`;
    if (checkoutBtn) checkoutBtn.disabled = false;
}

function removeFromFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(item => String(item.id) !== String(productId));
    localStorage.setItem('favorites', JSON.stringify(favorites));

    updateFavoritesBadge();
    renderFavorites();
    showNotification('Товар удален из избранного');
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => String(item.id) !== String(productId));
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartBadge();
    renderCart();

    updateCartButtonState(productId, false);

    window.dispatchEvent(new CustomEvent('cartChanged', {
        detail: { productId: productId, action: 'removed', cart: cart }
    }));

    showNotification('Товар удален из корзины');
}

function updateCartQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    if (newQuantity > 99) {
        newQuantity = 99;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const currentCount = cart.filter(item => String(item.id) === String(productId)).length;

    if (newQuantity > currentCount) {

        const product = cart.find(item => String(item.id) === String(productId));
        if (product) {
            for (let i = currentCount; i < newQuantity; i++) {
                cart.push({ ...product });
            }
        }
    } else if (newQuantity < currentCount) {

        const itemsToRemove = currentCount - newQuantity;
        for (let i = 0; i < itemsToRemove; i++) {
            const index = cart.findIndex(item => String(item.id) === String(productId));
            if (index !== -1) {
                cart.splice(index, 1);
            }
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    renderCart();
}

function getCategoryName(category) {
    const categoryNames = {
        'debit': 'Банковские карты',
        'prepaid': 'Предоплаченные карты',
        'ewallet': 'Электронные кошельки',
        'accounts': 'Аккаунты',
        'vpnproxy': 'Программы'
    };
    return categoryNames[category] || 'Товары';
}

function formatPrice(price) {
    if (typeof price === 'number') {
        return price + ' ₽';
    } else if (typeof price === 'string') {

        if (price.includes('₽') || price.includes('$') || price.includes('€')) {
            return price;
        }

        const numPrice = parseFloat(price);
        if (!isNaN(numPrice)) {
            return numPrice + ' ₽';
        }
    }
    return price || '0 ₽';
}

document.addEventListener('click', function (event) {
    const favoritesModal = document.getElementById('favoritesModal');
    const cartModal = document.getElementById('cartModal');

    if (event.target === favoritesModal) {
        closeFavoritesModal();
    }

    if (event.target === cartModal) {
        closeCartModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeFavoritesModal();
        closeCartModal();
    }
});

document.addEventListener('DOMContentLoaded', function () {

    updateCartBadge();
    updateFavoritesBadge();

    const favoritesButtons = document.querySelectorAll('.btn-favorites');
    favoritesButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            openFavoritesModal();
        });
    });

    const cartButtons = document.querySelectorAll('.btn-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            openCartModal();
        });
    });
});

window.products = products;

if (typeof window !== 'undefined') {
    window.updateCategoryTitle = updateCategoryTitle;
    window.loadProducts = loadProducts;

    Object.defineProperty(window, 'currentPage', {
        get: function () { return currentPage; },
        set: function (value) { currentPage = value; }
    });
}