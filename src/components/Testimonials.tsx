import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: '张总',
      position: 'CEO',
      company: '创新科技有限公司',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: '与卓越企业合作后，我们的数字化转型取得了显著成效。他们的专业团队不仅技术过硬，服务态度也非常出色。系统上线后，我们的运营效率提升了40%以上。'
    },
    {
      name: '李经理',
      position: 'CTO',
      company: '智慧制造集团',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b586?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: '作为制造业企业，我们对系统稳定性要求极高。卓越企业提供的解决方案完全满足了我们的需求，99.9%的稳定性让我们能够专注于核心业务发展。'
    },
    {
      name: '王主任',
      position: 'IT总监',
      company: '金融服务公司',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: '在金融行业，数据安全是重中之重。卓越企业的安全解决方案让我们完全放心，同时他们的技术支持团队响应速度非常快，问题都能在第一时间得到解决。'
    },
    {
      name: '陈总监',
      position: '运营总监',
      company: '电商平台',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: '电商行业竞争激烈，我们需要快速响应市场变化。卓越企业的云计算解决方案帮助我们实现了弹性扩容，在促销高峰期也能保持系统稳定运行。'
    },
    {
      name: '刘副总',
      position: '副总经理',
      company: '物流科技公司',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: '物流行业需要高效的数据处理能力。卓越企业的大数据分析平台帮助我们优化了配送路线，降低了20%的运营成本，效果超出预期。'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            客户评价
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 text-balance">
            客户的成功就是我们的成功
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            来自各行各业的客户见证，真实反映我们的专业能力和服务质量
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-lift border-border/50 hover:border-accent/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-accent/20 group-hover:text-accent/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
              获得行业认可的专业资质
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-accent/20 rounded-xl flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">ISO</span>
                </div>
                <div className="text-sm text-muted-foreground">ISO 27001认证</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-accent/20 rounded-xl flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">SOC</span>
                </div>
                <div className="text-sm text-muted-foreground">SOC 2 Type II</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-accent/20 rounded-xl flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">CMMI</span>
                </div>
                <div className="text-sm text-muted-foreground">CMMI 5级认证</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-accent/20 rounded-xl flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">高新</span>
                </div>
                <div className="text-sm text-muted-foreground">高新技术企业</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;