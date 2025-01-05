import { useFormContext } from "react-hook-form";

interface InputProps {
    label: string;
    placeholder: string;
    name: string;
    type?: string;
    className?: string;
    labelColor?: string;
    defaultValue?:string;
}

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    name,
    type = "text",
    className = "",
    labelColor = "",
    defaultValue
}) => {
    const { register } = useFormContext();

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className={`label-text ${labelColor}`}>{label}</span>
            </div>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                {...register(name)}
                className={`input input-bordered w-full bg-white/20 ${className}`}
            />
        </label>
    );
};

export default Input;
