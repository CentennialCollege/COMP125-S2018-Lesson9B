declare module objects {
    export class Button {

        /**
         * Creates an instance of Button.
         * @param {string} [source=""]
         * @param {number} [width=0]
         * @param {number} [height=0]
         */
        constructor(source:string = "", width:number=0, height:number=0)
    }

    export class Vector {
        
        /**
         * Creates an instance of Vector.
         * @param {number} [x=0]
         * @param {number} [y=0]
         */
        constructor(x:number=0, y:number=0);

        /**
         * This method returns a string representation of the Vector
         *
         * @returns {string}
         */
        public toString():string;

        /**
         * This public static method returns the Euclidean distance between two vector
         * @param vec1 
         * @param vec2 
         */
        public static distance(vec1:Vector, vec2:Vector):number;
    
        /**
         * This method returns the sum of vec1 + vec2
         *
         * @static
         * @param {Vector} vec1
         * @param {Vector} vec2
         * @returns {Vector}
         */
        public static add(vec1:Vector, vec2:Vector):Vector;
    }
}