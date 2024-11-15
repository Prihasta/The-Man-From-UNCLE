import Image from 'next/image'; // Ensure this import if using Next.js Image component

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_dark_green';
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
    return (
        <div>
            <button 
                className={`flexCenter gap-3 rounded-full border ${variant}`}
                type={type}
            > 
                {icon && <Image src={icon} alt={title} width={24} height={24} />}
                <label className="bold-16 whitespace-nowrap">{title}</label>
            </button>
        </div>
    )
}

export default Button;
