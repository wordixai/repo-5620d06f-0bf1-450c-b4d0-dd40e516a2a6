import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">行业领先的企业解决方案</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up">
            <span className="block text-balance">引领未来</span>
            <span className="block text-accent-foreground/90">创新无限</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto text-balance animate-fade-in" style={{ animationDelay: '0.2s' }}>
            我们致力于为企业提供最前沿的技术解决方案，助力您的业务实现跨越式发展，在数字化时代保持竞争优势
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold group">
              立即开始
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              观看演示
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-white/70">满意客户</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-white/70">系统稳定性</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/70">技术支持</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;