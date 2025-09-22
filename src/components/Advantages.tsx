import { Card, CardContent } from '@/components/ui/card';
import { 
  Award, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Lightbulb,
  Globe,
  Headphones
} from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: '行业领先',
      description: '15年行业经验，服务超过10,000家企业客户',
      metric: '98%',
      metricLabel: '客户满意度'
    },
    {
      icon: Clock,
      title: '快速响应',
      description: '24小时内响应，48小时内提供解决方案',
      metric: '2小时',
      metricLabel: '平均响应时间'
    },
    {
      icon: Users,
      title: '专业团队',
      description: '200+技术专家，覆盖各个技术领域',
      metric: '200+',
      metricLabel: '技术专家'
    },
    {
      icon: TrendingUp,
      title: '持续增长',
      description: '帮助客户业务平均增长35%，效率提升50%',
      metric: '+35%',
      metricLabel: '业务增长'
    },
    {
      icon: Shield,
      title: '安全保障',
      description: '银行级安全标准，99.9%系统稳定性',
      metric: '99.9%',
      metricLabel: '系统稳定性'
    },
    {
      icon: Lightbulb,
      title: '创新驱动',
      description: '持续投入研发，拥有50+项技术专利',
      metric: '50+',
      metricLabel: '技术专利'
    },
    {
      icon: Globe,
      title: '全球服务',
      description: '覆盖30+国家和地区，本地化服务支持',
      metric: '30+',
      metricLabel: '服务国家'
    },
    {
      icon: Headphones,
      title: '贴心服务',
      description: '7x24专业技术支持，一对一客户经理',
      metric: '7x24',
      metricLabel: '技术支持'
    }
  ];

  return (
    <section id="advantages" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            核心优势
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 text-balance">
            为什么选择我们
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            凭借深厚的技术积累和丰富的项目经验，我们为客户提供最可靠、最专业的企业级解决方案
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card 
                key={index}
                className="hover-lift bg-white/80 backdrop-blur-sm border-white/50 hover:border-accent/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 text-center relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {advantage.metric}
                  </div>
                  <div className="text-sm text-accent font-medium mb-3">
                    {advantage.metricLabel}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8">
              值得信赖的合作伙伴
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">年行业经验</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10K+</div>
                <div className="text-muted-foreground">企业客户</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">成功案例</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-muted-foreground">客户续约率</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;