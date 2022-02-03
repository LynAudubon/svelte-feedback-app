<script>
    export let style = 'primary'
    export let type = 'button'
    export let disabled = 'false'
</script>

<button {type} {disabled} class={style}>
    <slot></slot>
</button>

<style>
    button {
       color: #fff;
       border: 0;
       border-radius: 8px;
       color: #fff;
       width: 100px; 
    }

    .primary {
        background-color: #781D42; 
        height: 35px;
        width: 70px;
    }

    .secondary {
        background-color: #F8E71C; 
    }

    button:hover {
        transform: scale(0.98);
        opacity: 0.9;
    }

    button:disabled {
        background-color: #cccccc;
        color: #333;
    }

    button:disabled:hover {
        transform: scale(1);
        opacity: 1;
    }
</style>