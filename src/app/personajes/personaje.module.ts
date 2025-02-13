import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PersonajeComponent } from "./personaje/personaje.component";

@NgModule({
    declarations:[
        PersonajeComponent
    ],
    exports:[
        PersonajeComponent
    ],
    imports:[
        CommonModule
    ]
    
})

export class PersonajeModulo{
    
}