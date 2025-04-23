import { motion, AnimatePresence } from 'framer-motion';

const AnimatedContent = ({ children, currentLang }) => {
    
        // 使用 window.innerWidth 来判断屏幕宽度
        const isMobile = window.innerWidth <= 768;
        
        // 根据屏幕宽度设置不同的条纹数量
        const stripeCount = isMobile ? 5 : 20;
        
        // 创建条纹数组
        const stripes = Array.from({ length: stripeCount }, (_, i) => ({
            width: `${100 / stripeCount}%`,  // 动态计算每个条纹的宽度
            left: `${i * (100 / stripeCount)}%`,  // 动态计算条纹位置
            color: i % 3 === 0 ? '#FFB6C1' : (i % 3 === 1 ? '#E6E6FA' : '#D8BFD8')
        }));
    

    // 创建条纹数组，创建一个长度为20的数组
/*
    const stripes = Array.from({ length: 20 }, (_, i) => ({
        width: '5%',  // 每个条纹宽度为5%
        left: `${i * 5}%`,  // 条纹位置
        color: i % 3 === 0 ? '#FFB6C1' : (i % 3 === 1 ? '#E6E6FA' : '#D8BFD8')  // 三种颜色交替
    })); // 三种颜色交替
*/
    return (
        <AnimatePresence mode="wait">
            <motion.div
                
                key={currentLang}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh',
                    zIndex: 1
                }}
            >
                {/* 彩色条纹幕布 */}
                {/* 创建一个长度为20的数组，每个条纹宽度为5%，条纹位置为i * 5%，颜色为三种颜色交替 */}
                {stripes.map((stripe, index) => (
                    <motion.div //每个条纹样式
                    
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: stripe.left,
                            width: stripe.width,
                            height: '100%',
                            backgroundColor: stripe.color,
                            zIndex: 2
                        }} //动画效果
                        initial={{ y: 0 }} //初始位置再底部
                        animate={{ y: '-100%' }} //动画效果，从底部向上移动
                        exit={{ y: 0 }} //动画结束位置再底部
                        transition={{ 
                            duration: 0.8,
                            ease: [0.4, 0, 0.2, 1],
                            delay: index * 0.05  // 每个条纹延迟0.05秒
                        }}
                    />
                ))}
                
                {/* 内容页面 */}
                <motion.div
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0 }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedContent;