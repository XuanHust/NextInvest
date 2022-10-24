import { memo } from "react";
import { FieldError } from "react-hook-form";

interface InputSelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  register?: object;
  className?: string;
  label?: string;
  error?: FieldError | undefined;
  options?: Array<any> | undefined;
  placeholder: string;
  classNameInput?: string;
  disabled?: boolean;
  horizontal?: boolean;
  classNameLabel?: string;
  iconLabel?: JSX.Element;
  defaultValue?: any;
  handleSelected?: (e: any) => void;
  required?: boolean;
}

const InputSelect = ({
  register,
  error,
  label,
  className,
  classNameInput,
  options,
  placeholder,
  disabled = false,
  horizontal = false,
  classNameLabel,
  iconLabel,
  defaultValue,
  required,
  handleSelected,
  ...rest
}: InputSelectProps) => {
  return (
    <div className={`w-full ${horizontal ? "flex gap-2 mb-2" : "mt-2"} ${className}`}>
      {label && (
        <div className="items-center flex flex-col justify-center">
          <div className={`flex justify-start items-center gap-2 ${horizontal ? "min-w-[100px]" : "mb-1"} ${classNameLabel}`}>
            {iconLabel}
            <label className="block text-gray-700 text-md font-medium">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          </div>
          {error && horizontal && <p className="mt-2 h-4"></p>}
        </div>
      )}
      <div className={`relative ${horizontal ? "flex-1" : ""}`}>
        <select
          {...register}
          {...rest}
          className={`w-full cursor-pointer focus:outline-none appearance-none focus:shadow-outline rounded border px-3 pr-8 bg-[#ffffff] h-11 ${classNameInput}`}
          disabled={disabled}
          defaultValue={''}
        >
          {placeholder && (
            <option value={''} disabled>
              {placeholder}
            </option>
          )}
          {options?.map((item, inx) => (
            <option
              value={item?.value}
              key={item?.value}
              selected={defaultValue == item?.value}
            >
              {item?.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-2 text-red-500 text-sm">{error?.message}</p>}
      </div>
    </div>
  )
}

export default memo(InputSelect);
