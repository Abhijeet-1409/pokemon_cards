export class Pokemon {
    constructor(id,url, name, height, weight) {
        this.id = id;
        this.url = url;
        this.stats = [];
        this.types = [];
        this.name = name;
        this.sprites = [];
        this.abilities = [];
        this.height = height;
        this.weight = weight;
    }


    setSprites(sprites) {
        if (sprites) {
            const { front_default, other } = sprites;
            this.sprites.push(front_default);
            if (other && other['showdown']) {
                this.sprites.push(other['showdown'].front_default);
            }
        }
    }

    setAbilities(abilities) {
        if (abilities) {
            this.abilities = abilities.map(abilityObj => abilityObj.ability.name);
        }
    }

    setStats(stats) {
        if (stats) {
            this.stats = stats.map(statObj => ({
                name: statObj.stat.name,
                value: statObj.base_stat
            }));
        }
    }

    setTypes(types) {
        if (types) {
            this.types = types.map(typeObj => typeObj.type.name);
        }
    }
}
