import { ReactNode, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface FoodType {
    id: number;
    name: string;
    description: string;
    price: string;
    available: boolean;
    image: string
}

export interface FoodProps {
    food: FoodType;
    handleEditFood: (food: FoodType) => void;
    handleDelete: (id: number) => void
}

export interface HeaderProps {
    openModal: () => void
}

export interface ModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    children?: ReactNode
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    icon?: IconType;    
  };

export interface ContainerFoodStyleProps {
    available: boolean
}

export interface ContainerInputStyleProps {
    isFilled: boolean,
    isFocused: boolean
}