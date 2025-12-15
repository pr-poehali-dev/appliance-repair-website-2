import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    {
      icon: "Thermometer",
      title: "Диагностика холодильника",
      description: "Полная проверка системы охлаждения, компрессора и всех узлов",
      price: "от 500 ₽"
    },
    {
      icon: "Wrench",
      title: "Замена компрессора",
      description: "Установка нового компрессора с гарантией до 2 лет",
      price: "от 3500 ₽"
    },
    {
      icon: "Droplets",
      title: "Устранение протечек",
      description: "Ремонт системы оттайки и дренажа холодильника",
      price: "от 1200 ₽"
    },
    {
      icon: "Zap",
      title: "Замена терморегулятора",
      description: "Установка и настройка нового термостата",
      price: "от 1500 ₽"
    },
    {
      icon: "Fan",
      title: "Заправка фреоном",
      description: "Дозаправка и полная замена хладагента",
      price: "от 2000 ₽"
    },
    {
      icon: "Settings",
      title: "Профилактика и чистка",
      description: "Комплексное обслуживание для продления срока службы",
      price: "от 800 ₽"
    }
  ];

  const reviews = [
    {
      name: "Мария Соколова",
      rating: 5,
      text: "Отличный сервис! Мастер приехал в день обращения, быстро нашёл проблему и починил холодильник. Работает уже 3 месяца без нареканий.",
      date: "2 недели назад"
    },
    {
      name: "Дмитрий Петров",
      rating: 5,
      text: "Профессиональный подход. Заменили компрессор, дали гарантию. Цены честные, без накруток. Рекомендую!",
      date: "1 месяц назад"
    },
    {
      name: "Елена Васильева",
      rating: 5,
      text: "Спасибо за оперативность! Холодильник перестал морозить вечером, а утром уже всё работало. Мастер вежливый и аккуратный.",
      date: "3 недели назад"
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "Быстрый выезд",
      description: "Приедем в течение 2 часов после заявки"
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description: "До 2 лет гарантии на все работы"
    },
    {
      icon: "Wallet",
      title: "Честные цены",
      description: "Без скрытых платежей и накруток"
    },
    {
      icon: "Award",
      title: "Опытные мастера",
      description: "Более 10 лет работы с холодильным оборудованием"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Snowflake" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ХолодМастер</h1>
                <p className="text-xs text-gray-600">Ремонт холодильников</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-700 hover:text-primary transition">Услуги</a>
              <a href="#price" className="text-gray-700 hover:text-primary transition">Цены</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary transition">Отзывы</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition">О нас</a>
              <Button className="gap-2">
                <Icon name="Phone" size={18} />
                +7 (495) 123-45-67
              </Button>
            </div>
            <Button className="md:hidden gap-2">
              <Icon name="Phone" size={18} />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 text-sm">Работаем с 2010 года</Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ремонт холодильников и морозильников
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональный ремонт любой сложности. Выезд мастера в день обращения. Гарантия до 2 лет на все виды работ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg gap-2 hover-scale">
                  <Icon name="PhoneCall" size={20} />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="text-lg gap-2 hover-scale">
                  <Icon name="Calculator" size={20} />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex gap-8 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  Выезд за 2 часа
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  Работаем 24/7
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-300/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/91da576f-1300-44ae-9472-ba39ea5fe469/files/2925ae31-1a0a-4f01-bc5b-4419d3d0b285.jpg"
                alt="Ремонт холодильников"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Что мы ремонтируем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выполняем все виды работ по ремонту и обслуживанию холодильного оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Подробнее
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Прозрачные цены
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Стоимость работ известна заранее. Никаких скрытых доплат
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6 pb-6 border-b">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Стандартный ремонт</h3>
                    <p className="text-gray-600">Базовые работы</p>
                  </div>
                  <Icon name="Wrench" size={40} className="text-primary" />
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Диагностика</span>
                    <span className="font-semibold">500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Замена терморегулятора</span>
                    <span className="font-semibold">1500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Устранение протечек</span>
                    <span className="font-semibold">1200 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Чистка и профилактика</span>
                    <span className="font-semibold">800 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Замена уплотнителя</span>
                    <span className="font-semibold">900 ₽</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Заказать ремонт
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-primary border-2 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-white">Популярное</Badge>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6 pb-6 border-b">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Сложный ремонт</h3>
                    <p className="text-gray-600">Серьёзные неисправности</p>
                  </div>
                  <Icon name="Settings" size={40} className="text-primary" />
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Замена компрессора</span>
                    <span className="font-semibold">3500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Заправка фреоном</span>
                    <span className="font-semibold">2000 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Ремонт системы No Frost</span>
                    <span className="font-semibold">2500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Замена испарителя</span>
                    <span className="font-semibold">3000 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Ремонт платы управления</span>
                    <span className="font-semibold">2800 ₽</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">
                  Заказать ремонт
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-600 mt-8">
            <Icon name="Info" size={18} className="inline mr-2" />
            Цены указаны без стоимости запчастей. Точная стоимость определяется после диагностики.
          </p>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 5000 довольных клиентов за 14 лет работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">О компании</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Нужен ремонт холодильника?
              </h2>
              <p className="text-xl mb-8 text-blue-50">
                Оставьте заявку, и наш мастер свяжется с вами в течение 5 минут
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg gap-2 hover-scale">
                  <Icon name="PhoneCall" size={20} />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg gap-2 bg-white/10 hover:bg-white/20 text-white border-white hover-scale">
                  <Icon name="MessageSquare" size={20} />
                  Написать в WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Snowflake" size={32} className="text-primary" />
                <h3 className="text-xl font-bold">ХолодМастер</h3>
              </div>
              <p className="text-gray-400">
                Профессиональный ремонт холодильников с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition">Диагностика</a></li>
                <li><a href="#" className="hover:text-primary transition">Ремонт</a></li>
                <li><a href="#" className="hover:text-primary transition">Обслуживание</a></li>
                <li><a href="#" className="hover:text-primary transition">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@holodmaster.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">График работы</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Круглосуточно, без выходных
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ХолодМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
