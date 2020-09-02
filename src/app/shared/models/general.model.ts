export class ElementInView {
    x: number;
    y: number;
    width: number;
    height: number;
    fully: boolean;
    menu: boolean;
    half: boolean;
    partially: boolean;
    entering: boolean;
    justEntering: boolean;
    inactive: boolean;
}

export interface IContentModel {
    orderLink: string;
}
