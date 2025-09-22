import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: '解决方案',
      links: [
        { name: '云计算服务', href: '#' },
        { name: '大数据分析', href: '#' },
        { name: '网络安全', href: '#' },
        { name: '移动应用', href: '#' },
        { name: '商业智能', href: '#' }
      ]
    },
    {
      title: '服务支持',
      links: [
        { name: '技术支持', href: '#' },
        { name: '在线文档', href: '#' },
        { name: '培训服务', href: '#' },
        { name: '客户服务', href: '#' },
        { name: '系统状态', href: '#' }
      ]
    },
    {
      title: '公司信息',
      links: [
        { name: '关于我们', href: '#' },
        { name: '新闻动态', href: '#' },
        { name: '职业机会', href: '#' },
        { name: '合作伙伴', href: '#' },
        { name: '投资者关系', href: '#' }
      ]
    },
    {
      title: '法律条款',
      links: [
        { name: '使用条款', href: '#' },
        { name: '隐私政策', href: '#' },
        { name: 'Cookie政策', href: '#' },
        { name: '服务协议', href: '#' },
        { name: '免责声明', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              订阅我们的资讯
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              获取最新的技术动态、行业洞察和产品更新信息
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="输入您的邮箱地址" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white">
                <Send className="w-4 h-4 mr-2" />
                订阅
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-display font-bold text-xl">
                卓越企业
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              专注于为企业提供前沿的数字化解决方案，助力客户在数字化时代实现业务增长和创新突破。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>400-888-9999</span>
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>contact@excellence.com</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>北京市朝阳区金融街88号</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 卓越企业. 保留所有权利.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;