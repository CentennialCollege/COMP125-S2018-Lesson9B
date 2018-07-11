(function(objects){
    class Vector {
        constructor(x = 0, y =0) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return `(${this.x}, ${this.y})`;
        }
    }

    Vector.distance = function (vec1, vec2) {
        return Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2));
    };

    Vector.right = function () {
        return new Vector(1, 0);
    };

    Vector.left = function() {
        return new Vector (-1, 0);
    };

    Vector.up = function() {
        return new Vector(0, 1);
    };

    Vector.down = function() {
        return new Vector(0, -1);
    }

    Vector.zero = function() {
        return new Vector();
    }

    Vector.add = function(vec1, vec2) {
        return new Vector(vec1.x + vec2.x, vec1.y + vec2.y);
    }

    Vector.subtract = function(vec1, vec2) {
        return new Vector(vec1.x - vec2.x, vec1.y - vec2.y);
    }

    Vector.uniformScale = function(vec1, scalar) {
        return new Vector(vec1.x * scalar, vec1.y * scalar);
    }

    Vector.scale = function(vec1, scaleX, scaleY) {
        return new Vector(vec1.x * scaleX, vec2.y * scaleY);
    }

    objects.Vector = Vector;

})(objects || (objects = {}));