<template>
  <div
    class="flex"
    :style="{ height: `${h}rpx`, widht: `${w}rpx` }"
    :class="[`direction-${direction}`, `space-${space}`, `x-${x}`, `y-${y}`]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "flex",
  props: {
    direction: {
      type: String,
      default: `x`,
    },
    space: {
      type: String,
      default: `inherit`,
    },
    x: {
      type: String,
      default: `center`,
    },
    y: {
      type: String,
      default: `center`,
    },
    h: {
      type: String,
      default: `inherit`,
    },
    w: {
      type: String,
      default: `inherit`,
    },
  },
};
</script>
<style lang="scss" scoped>
// direction is horizontal
.y-center {
  align-items: center;
}

.y-top {
  align-items: flex-start;
}

.y-bottom {
  align-items: flex-end;
}

.x-center {
  justify-content: center;
}

.x-left {
  justify-content: flex-start;
}

.x-right {
  justify-content: flex-end;
}

.flex {
  display: flex;
  flex-wrap: wrap;

  // direction is vertical
  &.space-around {
    justify-content: space-around;
  }

  &.space-between {
    justify-content: space-between;
  }

  &.direction-y {
    flex-direction: column;

    &.x-left {
      align-items: flex-start;
    }

    &.x-center {
      align-items: center;
    }

    &.x-right {
      align-items: flex-end;
    }

    &.y-top {
      justify-content: flex-start;
    }

    &.y-center {
      justify-content: center;
    }

    &.y-bottom {
      justify-content: flex-end;
    }
  }
}
</style>
