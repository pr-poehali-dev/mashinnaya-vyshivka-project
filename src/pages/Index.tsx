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
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">UZ</span>
              </div>
              <span className="font-semibold text-lg">UZCOTTON</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'technologies', label: 'Технологии' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'pricing', label: 'Прайс' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button onClick={() => scrollToSection('order')} className="bg-primary hover:bg-primary/90">
              Заказать
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Вышивка на поло
            </h1>
            <p className="text-xl text-muted-foreground">
              Быстро. Качественно. Индивидуально.
            </p>
            <p className="text-foreground/80">
              Качественная машинная вышивка логотипов и изображений на ваших изделиях высокопрочными нитями с использованием профессионального оборудования и гарантией качества.
            </p>
            <Button 
              onClick={() => scrollToSection('order')} 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8"
            >
              Заказать вышивку
            </Button>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://cdn.poehali.dev/projects/b2ae325f-796c-42e6-ae05-19045a8cd3a2/files/27a344a7-9c4a-4ebf-ae72-b6e81de17eea.jpg"
              alt="Профессиональное вышивальное оборудование"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shirt',
                title: 'Вышивка на одежде',
                description: 'Логотипы и дизайны на поло, футболках, толстовках любой сложности',
              },
              {
                icon: 'Briefcase',
                title: 'Корпоративная символика',
                description: 'Брендирование для компаний, униформа с логотипами',
              },
              {
                icon: 'Palette',
                title: 'Индивидуальный дизайн',
                description: 'Разработка уникальных макетов под ваши задачи',
              },
            ].map((service, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Технологии и оборудование</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Современный парк высокоточного оборудования для любых задач
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/b2ae325f-796c-42e6-ae05-19045a8cd3a2/files/f379aa06-7f56-4a4f-9ab2-750080397c03.jpg"
                alt="Производственный цех"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Производственный цех</h3>
                <p className="text-muted-foreground">
                  Современное производство площадью 200+ кв.м с климат-контролем для стабильного качества
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/b2ae325f-796c-42e6-ae05-19045a8cd3a2/files/ad7d4276-2d0c-443e-9bbd-71f9120b1f8d.jpg"
                alt="Процесс вышивки"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Точность исполнения</h3>
                <p className="text-muted-foreground">
                  Компьютерное управление обеспечивает точность позиционирования до 0.1 мм
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Cpu" className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Многоголовочные машины</h3>
                <p className="text-muted-foreground text-sm">
                  10-головочные вышивальные машины Brother и Tajima для одновременной обработки до 10 изделий
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Layers" className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">15 игл на головку</h3>
                <p className="text-muted-foreground text-sm">
                  Широкая палитра цветов без остановки процесса. Автоматическая смена нитей
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Gauge" className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Скорость до 1000 стежков/мин</h3>
                <p className="text-muted-foreground text-sm">
                  Высокая производительность без компромиссов по качеству
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Monitor" className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Программное управление</h3>
                <p className="text-muted-foreground text-sm">
                  Профессиональное ПО Wilcom для создания и редактирования дизайнов любой сложности
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Специализированные пяльцы</h3>
                <p className="text-muted-foreground text-sm">
                  Полный набор пялец для любых типов изделий: от кепок до курток
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Премиум нити</h3>
                <p className="text-muted-foreground text-sm">
                  Полиэстеровые и вискозные нити Madeira, Gunold — стойкость к стирке и выцветанию
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши работы</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square rounded-lg bg-card border border-border overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-105 transition-transform">
                  <Icon name="Image" className="text-primary opacity-30" size={64} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Прайс-лист</h2>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { name: 'Вышивка логотипа (до 5000 стежков)', price: 'от 150 ₽' },
                  { name: 'Вышивка логотипа (5000-10000 стежков)', price: 'от 250 ₽' },
                  { name: 'Сложный дизайн (10000+ стежков)', price: 'от 350 ₽' },
                  { name: 'Разработка макета', price: 'от 500 ₽' },
                  { name: 'Срочный заказ (1 день)', price: '+50%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-border last:border-0">
                    <span className="text-foreground">{item.name}</span>
                    <span className="text-primary font-semibold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  * Точная стоимость рассчитывается индивидуально в зависимости от сложности и объема заказа
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Оформить заказ</h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и мы свяжемся с вами в течение часа
          </p>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    type="text" 
                    placeholder="Иван Иванов" 
                    required 
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    required 
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    required 
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Тип изделия</label>
                  <Input 
                    type="text" 
                    placeholder="Поло, футболка, толстовка..." 
                    required 
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Количество</label>
                  <Input 
                    type="number" 
                    placeholder="10" 
                    min="1" 
                    required 
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Описание заказа</label>
                  <Textarea 
                    placeholder="Опишите ваш заказ: дизайн, размеры вышивки, особые пожелания..." 
                    rows={4} 
                    required 
                    className="bg-background border-border"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@uzcotton.ru</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, Россия</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 UZCOTTON. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;