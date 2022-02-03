<script>
    import { FeedbackStore } from '../stores'
    import Card from './Card.svelte'
    export let item

    const handleDelete = (itemId) => {

        FeedbackStore.update((currentFeedback) => {
            return currentFeedback.filter(item => item.id != itemId)
        })
    }
</script>

<Card>
    <div class='num-display'>
        {item.rating}
    </div>
    <button class='close' on:click={() => handleDelete(item.id)}>X</button>
    <p class='text-display'>
        {item.text}
    </p>
</Card>

<style>
     .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #DE834D;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
    font-weight: bold;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }

  .text-display {
      margin: 10px 50px 10px 60px;
      padding: 10px;
  }
</style>

