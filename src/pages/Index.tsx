import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                <span className="text-white font-bold">UZ</span>
              </div>
              <div>
                <span className="font-bold text-xl text-foreground block">UZCOTTON</span>
                <span className="text-xs text-muted-foreground">Машинная вышивка</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'process', label: 'Процесс' },
                { id: 'services', label: 'Услуги' },
                { id: 'conditions', label: 'Условия' },
                { id: 'pricing', label: 'Прайс' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button onClick={() => scrollToSection('order')} className="bg-primary hover:bg-primary/90 shadow-md">
              Заказать
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Машинная вышивка<br />на заказ
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">
              Быстро · Качественно · Профессионально
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Вышиваем логотипы и дизайны на текстильных изделиях с гарантией качества. 
              Современное оборудование и опытные специалисты.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('order')} 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-10 shadow-lg"
              >
                Оформить заказ
              </Button>
              <Button 
                onClick={() => scrollToSection('pricing')} 
                size="lg" 
                variant="outline"
                className="text-lg px-10 border-2"
              >
                Узнать цены
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/b2ae325f-796c-42e6-ae05-19045a8cd3a2/files/86dc2f11-209a-4d0e-aa85-6dae11ed59e9.jpg"
                alt="Запяливание изделия"
                className="w-full h-56 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Точная подготовка</h3>
                <p className="text-muted-foreground">
                  Каждое изделие аккуратно запяливается для идеального результата
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/b2ae325f-796c-42e6-ae05-19045a8cd3a2/files/1af5c1b9-b41c-49e8-abd1-62ebe5263a41.jpg"
                alt="Процесс вышивки"
                className="w-full h-56 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Качественная вышивка</h3>
                <p className="text-muted-foreground">
                  Профессиональные нити и контроль каждого стежка
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/b2ae325f-796c-42e6-ae05-19045a8cd3a2/files/16bc0c78-0b26-47ba-a6de-5f95c182b589.jpg"
                alt="Специалисты за работой"
                className="w-full h-56 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Опытные мастера</h3>
                <p className="text-muted-foreground">
                  Наши специалисты гарантируют высокое качество
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Как мы работаем</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Прозрачный процесс от заявки до готового изделия
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: 'MessageSquare',
                title: 'Заявка',
                description: 'Вы оставляете заявку с описанием задачи',
              },
              {
                step: '02',
                icon: 'FileText',
                title: 'Макет',
                description: 'Согласовываем дизайн и готовим макет для вышивки',
              },
              {
                step: '03',
                icon: 'Settings',
                title: 'Производство',
                description: 'Вышиваем изделия на профессиональном оборудовании',
              },
              {
                step: '04',
                icon: 'Package',
                title: 'Выдача',
                description: 'Готовые изделия проверяются и передаются вам',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto shadow-lg">
                    <Icon name={item.icon} className="text-primary" size={36} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши услуги</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shirt',
                title: 'Вышивка на одежде',
                items: ['Поло и футболки', 'Толстовки и свитшоты', 'Куртки и спецодежда', 'Головные уборы'],
              },
              {
                icon: 'Briefcase',
                title: 'Корпоративная вышивка',
                items: ['Логотипы компаний', 'Униформа сотрудников', 'Промо-одежда', 'Фирменная символика'],
              },
              {
                icon: 'Sparkles',
                title: 'Индивидуальные заказы',
                items: ['Именные вышивки', 'Уникальные дизайны', 'Небольшие тиражи', 'Сложные композиции'],
              },
            ].map((service, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <Icon name="Check" className="text-primary mr-2 flex-shrink-0" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="conditions" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Условия заказа</h2>
          <p className="text-center text-muted-foreground mb-16">
            Прозрачные правила сотрудничества
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Сроки изготовления</h3>
                    <p className="text-muted-foreground mb-3">
                      Стандартный заказ — от 3 до 5 рабочих дней
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Срочный заказ (1-2 дня) — доплата 50%</li>
                      <li>• Крупные тиражи — обсуждается индивидуально</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="ShoppingBag" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Минимальный заказ</h3>
                    <p className="text-muted-foreground mb-3">
                      От 1 изделия — принимаем любые объемы
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Оптовые заказы — специальные цены</li>
                      <li>• Постоянным клиентам — скидки до 15%</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CreditCard" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Оплата</h3>
                    <p className="text-muted-foreground mb-3">
                      Удобные способы расчета
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Наличные и безналичный расчет</li>
                      <li>• Предоплата 50% при больших заказах</li>
                      <li>• Работаем с юридическими лицами</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="FileImage" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Макет дизайна</h3>
                    <p className="text-muted-foreground mb-3">
                      Помогаем с подготовкой файлов
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Принимаем любые форматы изображений</li>
                      <li>• Оцифровка логотипа — от 300 ₽</li>
                      <li>• Разработка уникального дизайна — от 500 ₽</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                    <p className="text-muted-foreground mb-3">
                      Несем ответственность за результат
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Переделка брака за наш счет</li>
                      <li>• Проверка перед выдачей заказа</li>
                      <li>• Консультация по уходу за изделием</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Доставка</h3>
                    <p className="text-muted-foreground mb-3">
                      Удобный способ получения заказа
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Самовывоз из нашей мастерской</li>
                      <li>• Курьерская доставка по городу</li>
                      <li>• Отправка в регионы транспортными компаниями</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Стоимость услуг</h2>
          <p className="text-center text-muted-foreground mb-16">
            Прозрачное ценообразование без скрытых платежей
          </p>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { name: 'Вышивка небольшого логотипа (до 5000 стежков)', price: 'от 150 ₽' },
                  { name: 'Вышивка среднего размера (5000-10000 стежков)', price: 'от 250 ₽' },
                  { name: 'Большой дизайн или сложная композиция (10000+ стежков)', price: 'от 350 ₽' },
                  { name: 'Оцифровка логотипа в вышивальный формат', price: 'от 300 ₽' },
                  { name: 'Разработка индивидуального дизайна', price: 'от 500 ₽' },
                  { name: 'Срочное выполнение (1-2 дня)', price: '+50% к стоимости' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-border last:border-0">
                    <span className="text-foreground pr-4">{item.name}</span>
                    <span className="text-primary font-bold text-xl whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-sm text-muted-foreground">
                    Итоговая стоимость рассчитывается индивидуально в зависимости от сложности дизайна, количества цветов и объема заказа. 
                    Для крупных заказов предоставляем скидки. Точную цену сообщим после обсуждения деталей.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="order" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Оформить заказ</h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и мы свяжемся с вами в течение 30 минут
          </p>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <Input 
                      type="text" 
                      placeholder="Иван Иванов" 
                      required 
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      required 
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="bg-background"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип изделия *</label>
                    <Input 
                      type="text" 
                      placeholder="Поло, футболка, толстовка..." 
                      required 
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Количество *</label>
                    <Input 
                      type="number" 
                      placeholder="10" 
                      min="1" 
                      required 
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Описание заказа *</label>
                  <Textarea 
                    placeholder="Опишите ваш заказ: какой дизайн нужно вышить, размеры, цвета, расположение на изделии, сроки..." 
                    rows={5} 
                    required 
                    className="bg-background"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-lg" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Контакты</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-2">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">info@uzcotton.ru</p>
                <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground mb-2">Москва, Россия</p>
                <p className="text-sm text-muted-foreground">Самовывоз и встречи</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">UZ</span>
                </div>
                <span className="font-bold text-lg">UZCOTTON</span>
              </div>
              <p className="text-background/70 text-sm">
                Профессиональная машинная вышивка на текстильных изделиях любой сложности
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                {['Услуги', 'Условия', 'Прайс', 'Контакты'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Рабочие часы</h4>
              <p className="text-background/70 text-sm mb-2">Понедельник - Пятница: 9:00 - 21:00</p>
              <p className="text-background/70 text-sm mb-2">Суббота - Воскресенье: 10:00 - 18:00</p>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/70 text-sm">&copy; 2024 UZCOTTON. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
