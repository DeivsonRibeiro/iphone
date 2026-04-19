function Footer() {

    const sections = [
       {
        title: 'Comprar e Saber Mais',
        links:['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comprar modelos', 'Acessórios']
       },
       {
        title: 'Especificações',
        links:['Características técnicas', 'Câmera', 'Bateria', 'Display']
       },
       {
        title: 'Suporte',
        links:['Suporte ao iPhone','AppleCare+', 'iOS 19', 'Contato']
       },
       {
        title: 'Apple',
        links:['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']
       }
     ];

     const buttonLinks = ['Políticas de Privacidade', 'Termos de Uso', 'Vendas'];
       
                    
        return ( 
       <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid  md:grid-cols-4 gap-8 mb-8">
                {sections.map((section, index) => (
                    <div key={index}>
                        <h4 className="font-semibold mb-4">{section.title}</h4>
                        <ul className="space-y-2 tex-sm text-gray-400">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a className="hover:text-white cursor-pointer" href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
             <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-md text-gray-500 py-4">
                    &copy; 2023 Apple Inc. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-gray-400">
                    {buttonLinks.map((link, index) => (
                        <a href="#"  className="hover:text-white" key={index}>{link}</a>
                    ))}
                </div>
            </div>
            <p className="text-xs text-gray-500 ">Site criado para fins educacionais-</p>
        </div>
        </div>
       
       </footer>
     );
}

export default Footer; ;