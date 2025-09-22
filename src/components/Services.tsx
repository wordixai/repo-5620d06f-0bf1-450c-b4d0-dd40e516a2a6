import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Database, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Cog,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: '云计算解决方案',
      description: '提供安全、可扩展的云基础设施服务，助力企业数字化转型',
      features: ['弹性扩容', '数据备份', '全球部署', '成本优化'],
      color: 'bg-blue-500'
    },
    {
      icon: Database,
      title: '大数据分析',
      description: '深度挖掘数据价值，为企业决策提供科学依据和智能洞察',
      features: ['实时分析', '预测建模', '可视化报告', '自动化处理'],
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: '网络安全防护',
      description: '全方位的网络安全解决方案，保护企业核心数据资产安全',
      features: ['威胁检测', '安全审计', '合规管理', '应急响应'],
      color: 'bg-red-500'
    },
    {
      icon: Smartphone,
      title: '移动应用开发',
      description: '打造用户体验优秀的移动应用，助力企业移动化战略实施',
      features: ['跨平台开发', 'UI/UX设计', '性能优化', '持续更新'],
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: '商业智能分析',
      description: '构建智能化的商业分析平台，提升企业运营效率和决策质量',
      features: ['数据挖掘', '趋势分析', '智能报表', '决策支持'],
      color: 'bg-orange-500'
    },
    {
      icon: Cog,
      title: '系统集成服务',
      description: '整合企业各类系统，实现数据互通和业务流程自动化',
      features: ['系统对接', '流程优化', '自动化部署', '运维支持'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-4">
            <Cog className="w-4 h-4 mr-2" />
            专业服务
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 text-balance">
            全方位的企业解决方案
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            我们提供从战略咨询到技术实施的一站式服务，助力企业在数字化时代实现业务增长和创新突破
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift border-border/50 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group/btn hover:bg-accent hover:text-white transition-all duration-300">
                    了解更多
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-accent p-8 md:p-12 rounded-3xl text-white">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              需要定制化解决方案？
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              我们的专家团队将为您提供个性化的咨询服务，量身定制最适合您企业的解决方案
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              联系专家咨询
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;