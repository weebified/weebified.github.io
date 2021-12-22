window.onload = () => {
    const msg = document.getElementById('msg')
    const container = document.getElementById('container')

    setTimeout(() => {
        container.style.setProperty('opacity', '1');
        setTimeout(() => {
            msg.style.setProperty('opacity', '1');
            document.documentElement.style.setProperty('--k_Dark', '#202b25')
            setTimeout(() => {
                document.getElementById('kana_content').style.setProperty('display', 'grid')
                msg.style.setProperty('transition-duration', '500ms')
                msg.style.setProperty('color', 'var(--k_txt)')
                setTimeout(() => {
                    msg.style.setProperty('color', 'transparent');
                    setTimeout(() => {
                        msg.style.setProperty('transition-duration', '350ms')
                        msg.style.setProperty('opacity', '0')
                        setTimeout(() => {
                            container.style.setProperty('transition-duration', '450ms')
                            container.style.setProperty('opacity', '0');
                            setTimeout(() => {
                                container.style.setProperty('display', 'none');
                            }, 450);
                        }, 400);
                    }, 300);
                }, 1500);
            }, 300);
        }, 500);
    }, 800);
}